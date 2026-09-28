import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateConversationDto } from './dto/create-conversation.dto';

@Injectable()
export class ConversationService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  // ============================================================
  // CREATE CONVERSATION
  // ============================================================

  async create(
    businessId: string,
    dto: CreateConversationDto,
  ) {
    const customer =
      await this.prisma.customer.findFirst({
        where: {
          id: dto.customerId,
          businessId,
        },
      });

    if (!customer) {
      throw new NotFoundException(
        'Customer not found.',
      );
    }

    const channel =
      await this.prisma.channelConnection.findFirst({
        where: {
          id: dto.channelConnectionId,
          businessId,
        },
      });

    if (!channel) {
      throw new NotFoundException(
        'Channel connection not found.',
      );
    }

    return this.prisma.conversation.create({
      data: {
        businessId,

        customerId:
          dto.customerId,

        channelConnectionId:
          dto.channelConnectionId,

        subject:
          dto.subject?.trim(),

        aiEnabled:
          dto.aiEnabled ?? true,
      },

      include: {
        customer: true,

        channelConnection: true,

        messages: {
          orderBy: {
            createdAt: 'asc',
          },
        },

        aiAgent: true,
      },
    });
  }

  // ============================================================
  // GET ALL CONVERSATIONS
  // ============================================================

  async findAll(
    businessId: string,
  ) {
    return this.prisma.conversation.findMany({
      where: {
        businessId,
      },

      orderBy: [
        {
          lastMessageAt: 'desc',
        },
        {
          updatedAt: 'desc',
        },
      ],

      include: {
        customer: true,

        channelConnection: true,

        aiAgent: true,

        _count: {
          select: {
            messages: true,
          },
        },
      },
    });
  }

  // ============================================================
  // GET SINGLE CONVERSATION
  // ============================================================

  async findOne(
    businessId: string,
    conversationId: string,
  ) {
    const conversation =
      await this.prisma.conversation.findFirst({
        where: {
          id: conversationId,
          businessId,
        },

        include: {
          customer: {
            include: {
              identities: true,
            },
          },

          channelConnection: true,

          messages: {
            orderBy: {
              createdAt: 'asc',
            },
          },

          aiAgent: true,
        },
      });

    if (!conversation) {
      throw new NotFoundException(
        'Conversation not found.',
      );
    }

    return conversation;
  }

  // ============================================================
  // ASSIGN AI AGENT TO CONVERSATION
  // ============================================================

  async assignAgent(
    businessId: string,
    conversationId: string,
    agentId: string,
  ) {
    const conversation =
      await this.prisma.conversation.findFirst({
        where: {
          id: conversationId,
          businessId,
        },
      });

    if (!conversation) {
      throw new NotFoundException(
        'Conversation not found.',
      );
    }

    const agent =
      await this.prisma.aIAgent.findFirst({
        where: {
          id: agentId,
          businessId,
        },
      });

    if (!agent) {
      throw new NotFoundException(
        'AI agent not found.',
      );
    }

    if (agent.status !== 'ACTIVE') {
      throw new BadRequestException(
        'AI agent must be ACTIVE before it can be assigned to a conversation.',
      );
    }

    return this.prisma.conversation.update({
      where: {
        id: conversationId,
      },

      data: {
        aiAgentId: agentId,
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
  }

  // ============================================================
  // REMOVE AI AGENT FROM CONVERSATION
  // ============================================================

  async removeAgent(
    businessId: string,
    conversationId: string,
  ) {
    const conversation =
      await this.prisma.conversation.findFirst({
        where: {
          id: conversationId,
          businessId,
        },
      });

    if (!conversation) {
      throw new NotFoundException(
        'Conversation not found.',
      );
    }

    return this.prisma.conversation.update({
      where: {
        id: conversationId,
      },

      data: {
        aiAgentId: null,
      },

      include: {
        customer: true,

        channelConnection: true,

        aiAgent: true,
      },
    });
  }

  // ============================================================
  // UPDATE CONVERSATION STATUS
  // ============================================================

  async updateStatus(
    businessId: string,
    conversationId: string,
    status:
      | 'OPEN'
      | 'PENDING'
      | 'RESOLVED'
      | 'ARCHIVED',
  ) {
    const existing =
      await this.prisma.conversation.findFirst({
        where: {
          id: conversationId,
          businessId,
        },
      });

    if (!existing) {
      throw new NotFoundException(
        'Conversation not found.',
      );
    }

    return this.prisma.conversation.update({
      where: {
        id: conversationId,
      },

      data: {
        status,

        resolvedAt:
          status === 'RESOLVED'
            ? new Date()
            : status === 'OPEN' ||
                status === 'PENDING'
              ? null
              : undefined,
      },

      include: {
        customer: true,

        channelConnection: true,

        aiAgent: true,
      },
    });
  }
}