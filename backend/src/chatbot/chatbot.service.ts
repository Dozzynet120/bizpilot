import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { AiService } from '../ai/ai.service';

import { CreateChatbotSessionDto } from './dto/create-chatbot-session.dto';

@Injectable()
export class ChatbotService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly aiService: AiService,
  ) {}

  /**
   * -------------------------------------------------------
   * Validate whether a website origin is allowed to use
   * the chatbot widget.
   * -------------------------------------------------------
   *
   * allowedDomains is stored as JSON in Prisma.
   *
   * Expected examples:
   *
   * [
   *   "http://localhost:3000",
   *   "https://example.com",
   *   "https://www.example.com"
   * ]
   *
   * We intentionally use exact origin matching.
   *
   * This means:
   *
   * https://example.com
   *
   * does NOT automatically allow:
   *
   * https://evil.example.com
   *
   * or:
   *
   * https://example.com.attacker.com
   */
  private validateWidgetOrigin(
    allowedDomains: unknown,
    origin?: string,
  ): void {
    /**
     * Browser requests from the actual website should
     * normally contain an Origin header.
     *
     * We do not allow an empty Origin when the widget
     * has configured allowed domains.
     */
    if (!origin) {
      throw new ForbiddenException(
        'Website origin is required to use this chatbot widget',
      );
    }

    /**
     * Parse the allowed domain list safely.
     */
    const allowedOrigins =
      Array.isArray(allowedDomains)
        ? allowedDomains.filter(
            (value): value is string =>
              typeof value === 'string',
          )
        : [];

    /**
     * If no domains have been configured, deny access.
     *
     * This is safer than treating an empty list as
     * "allow everyone".
     */
    if (allowedOrigins.length === 0) {
      throw new ForbiddenException(
        'This chatbot widget has no allowed domains configured',
      );
    }

    /**
     * Normalize the incoming origin.
     *
     * URL parsing prevents simple string tricks such as:
     *
     * https://example.com.attacker.com
     */
    let normalizedOrigin: string;

    try {
      const parsedOrigin = new URL(origin);

      /**
       * Origin consists of protocol + hostname + port.
       *
       * URL.origin gives us the normalized browser origin.
       */
      normalizedOrigin = parsedOrigin.origin;
    } catch {
      throw new ForbiddenException(
        'Invalid website origin',
      );
    }

    /**
     * Compare against configured origins.
     *
     * We intentionally do exact comparison rather than
     * startsWith/includes matching.
     */
    const isAllowed =
      allowedOrigins.some((allowedOrigin) => {
        try {
          const parsedAllowedOrigin =
            new URL(allowedOrigin);

          return (
            parsedAllowedOrigin.origin ===
            normalizedOrigin
          );
        } catch {
          return false;
        }
      });

    if (!isAllowed) {
      throw new ForbiddenException(
        'This website is not authorized to use this chatbot widget',
      );
    }
  }

  /**
   * -------------------------------------------------------
   * Find widget from conversation metadata and validate
   * its website origin.
   * -------------------------------------------------------
   */
  private async validateConversationOrigin(
    conversation: {
      metadata: unknown;
    },
    origin?: string,
  ) {
    const metadata =
      conversation.metadata;

    const widgetId =
      metadata &&
      typeof metadata === 'object' &&
      'widgetId' in metadata
        ? String(
            (metadata as Record<string, unknown>)
              .widgetId,
          )
        : null;

    if (!widgetId) {
      throw new ForbiddenException(
        'This conversation is not associated with a chatbot widget',
      );
    }

    const widget =
      await this.prisma.chatbotWidget.findUnique({
        where: {
          widgetId,
        },
      });

    if (!widget) {
      throw new NotFoundException(
        'Chatbot widget not found',
      );
    }

    if (!widget.enabled) {
      throw new BadRequestException(
        'This chatbot widget is currently disabled',
      );
    }

    this.validateWidgetOrigin(
      widget.allowedDomains,
      origin,
    );

    return widget;
  }

  async createSession(
    dto: CreateChatbotSessionDto,
    origin?: string,
  ) {
    if (!dto.widgetId) {
      throw new BadRequestException(
        'widgetId is required',
      );
    }

    /**
     * -------------------------------------------------------
     * 1. Find the public widget
     * -------------------------------------------------------
     */

    const widget =
      await this.prisma.chatbotWidget.findUnique({
        where: {
          widgetId: dto.widgetId,
        },
        include: {
          business: true,
          aiAgent: true,
        },
      });

    if (!widget) {
      throw new NotFoundException(
        'Chatbot widget not found',
      );
    }

    if (!widget.enabled) {
      throw new BadRequestException(
        'This chatbot widget is currently disabled',
      );
    }

    /**
     * -------------------------------------------------------
     * 1B. Validate requesting website origin
     * -------------------------------------------------------
     */

    this.validateWidgetOrigin(
      widget.allowedDomains,
      origin,
    );

    /**
     * -------------------------------------------------------
     * 2. Validate the AI Agent
     * -------------------------------------------------------
     */

    if (!widget.aiAgent) {
      throw new BadRequestException(
        'No AI agent is assigned to this chatbot widget',
      );
    }

    if (widget.aiAgent.status !== 'ACTIVE') {
      throw new BadRequestException(
        'The AI agent assigned to this widget is not active',
      );
    }

    /**
     * -------------------------------------------------------
     * 3. Find the website channel
     * -------------------------------------------------------
     */

    const channelConnection =
      await this.prisma.channelConnection.findFirst({
        where: {
          businessId: widget.businessId,
          channel: 'WEBSITE',
          status: 'CONNECTED',
        },
      });

    if (!channelConnection) {
      throw new BadRequestException(
        'No connected website channel exists for this business',
      );
    }

    /**
     * -------------------------------------------------------
     * 4. Find existing customer by email
     * -------------------------------------------------------
     */

    let customer = null;

    if (dto.email) {
      customer =
        await this.prisma.customer.findFirst({
          where: {
            businessId: widget.businessId,
            email: dto.email,
          },
        });
    }

    /**
     * -------------------------------------------------------
     * 5. Create visitor/customer if necessary
     * -------------------------------------------------------
     */

    if (!customer) {
      customer =
        await this.prisma.customer.create({
          data: {
            businessId:
              widget.businessId,

            fullName:
              dto.name ??
              'Website Visitor',

            email:
              dto.email ??
              null,

            phone:
              dto.phone ??
              null,

            metadata: {
              visitorId:
                dto.visitorId ??
                null,

              widgetId:
                widget.widgetId,
            },
          },
        });
    } else {
      /**
       * Update visitor metadata when the customer
       * already exists.
       */

      customer =
        await this.prisma.customer.update({
          where: {
            id: customer.id,
          },

          data: {
            fullName:
              dto.name ??
              customer.fullName,

            phone:
              dto.phone ??
              customer.phone,

            metadata: {
              ...(typeof customer.metadata ===
                'object' &&
              customer.metadata !== null
                ? customer.metadata
                : {}),

              visitorId:
                dto.visitorId ??
                null,

              widgetId:
                widget.widgetId,
            },
          },
        });
    }

    /**
     * -------------------------------------------------------
     * 6. Create conversation
     * -------------------------------------------------------
     */

    const conversation =
      await this.prisma.conversation.create({
        data: {
          businessId:
            widget.businessId,

          customerId:
            customer.id,

          channelConnectionId:
            channelConnection.id,

          aiAgentId:
            widget.aiAgent.id,

          status: 'OPEN',

          aiEnabled: true,

          metadata: {
            widgetId:
              widget.widgetId,

            visitorId:
              dto.visitorId ??
              null,
          },
        },

        include: {
          customer: true,
          channelConnection: true,
          aiAgent: true,
        },
      });

    /**
     * -------------------------------------------------------
     * 7. Return public chatbot session
     * -------------------------------------------------------
     */

    return {
      success: true,

      session: {
        conversationId:
          conversation.id,

        customerId:
          customer.id,

        businessId:
          widget.businessId,

        channelConnectionId:
          channelConnection.id,

        aiAgentId:
          widget.aiAgent.id,

        widgetId:
          widget.widgetId,
      },

      widget: {
        widgetId:
          widget.widgetId,

        name:
          widget.name,

        logoUrl:
          widget.logoUrl,

        primaryColor:
          widget.primaryColor,

        secondaryColor:
          widget.secondaryColor,

        welcomeMessage:
          widget.welcomeMessage,

        greeting:
          widget.greeting,

        position:
          widget.position,

        enabled:
          widget.enabled,

        allowedDomains:
          widget.allowedDomains,
      },

      business: {
        id:
          widget.business.id,

        name:
          widget.business.name,

        slug:
          widget.business.slug,
      },

      agent: {
        id:
          widget.aiAgent.id,

        name:
          widget.aiAgent.name,

        type:
          widget.aiAgent.type,
      },
    };
  }

  async sendMessage(
    conversationId: string,
    message: string,
    origin?: string,
  ) {
    if (!message?.trim()) {
      throw new BadRequestException(
        'Message cannot be empty',
      );
    }

    /**
     * -------------------------------------------------------
     * 1. Load conversation
     * -------------------------------------------------------
     */

    const conversation =
      await this.prisma.conversation.findUnique({
        where: {
          id: conversationId,
        },

        include: {
          customer: true,
          aiAgent: true,
          channelConnection: true,
        },
      });

    if (!conversation) {
      throw new NotFoundException(
        'Conversation not found',
      );
    }

    /**
     * -------------------------------------------------------
     * 1B. Validate widget/domain
     * -------------------------------------------------------
     */

    await this.validateConversationOrigin(
      conversation,
      origin,
    );

    /**
     * -------------------------------------------------------
     * 2. Validate chatbot conversation
     * -------------------------------------------------------
     */

    if (
      conversation.channelConnection.channel !==
      'WEBSITE'
    ) {
      throw new BadRequestException(
        'This conversation is not a website chatbot conversation',
      );
    }

    if (!conversation.aiEnabled) {
      throw new BadRequestException(
        'AI is disabled for this conversation',
      );
    }

    if (!conversation.aiAgent) {
      throw new BadRequestException(
        'No AI agent is assigned to this conversation',
      );
    }

    /**
     * -------------------------------------------------------
     * 3. Save customer message
     * -------------------------------------------------------
     */

    const customerMessage =
      await this.prisma.message.create({
        data: {
          conversationId,

          direction: 'INBOUND',

          senderType: 'CUSTOMER',

          type: 'TEXT',

          content:
            message.trim(),

          aiGenerated: false,
        },
      });

    /**
     * -------------------------------------------------------
     * 4. Update conversation
     * -------------------------------------------------------
     */

    await this.prisma.conversation.update({
      where: {
        id: conversationId,
      },

      data: {
        lastMessageAt:
          customerMessage.createdAt,
      },
    });

    /**
     * -------------------------------------------------------
     * 5. Generate AI response
     * -------------------------------------------------------
     */

    return this.aiService.generateResponse(
      conversation.businessId,
      conversation.id,
    );
  }

  async getSession(
    conversationId: string,
    origin?: string,
  ) {
    const conversation =
      await this.prisma.conversation.findUnique({
        where: {
          id: conversationId,
        },

        include: {
          customer: true,
          channelConnection: true,
          aiAgent: true,

          messages: {
            orderBy: {
              createdAt: 'asc',
            },
          },
        },
      });

    if (!conversation) {
      throw new NotFoundException(
        'Chatbot session not found',
      );
    }

    /**
     * -------------------------------------------------------
     * Validate website origin before returning the
     * conversation history.
     * -------------------------------------------------------
     */

    const widget =
      await this.validateConversationOrigin(
        conversation,
        origin,
      );

    if (
      conversation.channelConnection.channel !==
      'WEBSITE'
    ) {
      throw new BadRequestException(
        'This is not a website chatbot session',
      );
    }

    return {
      success: true,

      conversation: {
        id:
          conversation.id,

        status:
          conversation.status,

        aiEnabled:
          conversation.aiEnabled,

        businessId:
          conversation.businessId,

        customer:
          conversation.customer,

        channel:
          conversation.channelConnection.channel,

        aiAgent:
          conversation.aiAgent,

        messages:
          conversation.messages,

        widget,
      },
    };
  }
}