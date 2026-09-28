import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { randomBytes } from 'crypto';

import { PrismaService } from '../prisma/prisma.service';
import { CreateWidgetDto } from './dto/create-widget.dto';
import { UpdateWidgetDto } from './dto/update-widget.dto';

@Injectable()
export class WidgetsService {
  constructor(private readonly prisma: PrismaService) {}

  private generateWidgetId(): string {
    return `bp_wgt_${randomBytes(8).toString('hex')}`;
  }

  async create(
    businessId: string,
    dto: CreateWidgetDto,
  ) {
    const business = await this.prisma.business.findUnique({
      where: {
        id: businessId,
      },
    });

    if (!business) {
      throw new NotFoundException('Business not found');
    }

    if (dto.aiAgentId) {
      const agent = await this.prisma.aIAgent.findFirst({
        where: {
          id: dto.aiAgentId,
          businessId,
        },
      });

      if (!agent) {
        throw new BadRequestException(
          'The selected AI agent does not belong to this business',
        );
      }
    }

    const widget = await this.prisma.chatbotWidget.create({
      data: {
        widgetId: this.generateWidgetId(),
        businessId,

        name:
          dto.name ??
          'BizPilot Assistant',

        logoUrl: dto.logoUrl,

        primaryColor:
          dto.primaryColor ??
          '#2563EB',

        secondaryColor:
          dto.secondaryColor ??
          '#0F172A',

        welcomeMessage:
          dto.welcomeMessage ??
          'Hello! How can we help you today?',

        greeting:
          dto.greeting ??
          'Chat with us',

        position:
          dto.position ??
          'bottom-right',

        aiAgentId: dto.aiAgentId,

        enabled:
          dto.enabled ??
          true,

        allowedDomains:
          dto.allowedDomains ?? [],
      },
      include: {
        aiAgent: true,
        business: true,
      },
    });

    return {
      success: true,
      widget,
    };
  }

  async findAll(businessId: string) {
    const widgets =
      await this.prisma.chatbotWidget.findMany({
        where: {
          businessId,
        },
        include: {
          aiAgent: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
      });

    return {
      success: true,
      widgets,
    };
  }

  async findOne(
    businessId: string,
    widgetId: string,
  ) {
    const widget =
      await this.prisma.chatbotWidget.findFirst({
        where: {
          businessId,
          widgetId,
        },
        include: {
          aiAgent: true,
          business: true,
        },
      });

    if (!widget) {
      throw new NotFoundException(
        'Widget not found',
      );
    }

    return {
      success: true,
      widget,
    };
  }

  async update(
    businessId: string,
    widgetId: string,
    dto: UpdateWidgetDto,
  ) {
    const existing =
      await this.prisma.chatbotWidget.findFirst({
        where: {
          businessId,
          widgetId,
        },
      });

    if (!existing) {
      throw new NotFoundException(
        'Widget not found',
      );
    }

    if (dto.aiAgentId) {
      const agent =
        await this.prisma.aIAgent.findFirst({
          where: {
            id: dto.aiAgentId,
            businessId,
          },
        });

      if (!agent) {
        throw new BadRequestException(
          'The selected AI agent does not belong to this business',
        );
      }
    }

    const data: Record<string, unknown> = {};

    if (dto.name !== undefined) {
      data.name = dto.name;
    }

    if (dto.logoUrl !== undefined) {
      data.logoUrl = dto.logoUrl;
    }

    if (dto.primaryColor !== undefined) {
      data.primaryColor = dto.primaryColor;
    }

    if (dto.secondaryColor !== undefined) {
      data.secondaryColor = dto.secondaryColor;
    }

    if (dto.welcomeMessage !== undefined) {
      data.welcomeMessage = dto.welcomeMessage;
    }

    if (dto.greeting !== undefined) {
      data.greeting = dto.greeting;
    }

    if (dto.position !== undefined) {
      data.position = dto.position;
    }

    if (dto.aiAgentId !== undefined) {
      data.aiAgentId = dto.aiAgentId;
    }

    if (dto.enabled !== undefined) {
      data.enabled = dto.enabled;
    }

    if (dto.allowedDomains !== undefined) {
      data.allowedDomains = dto.allowedDomains;
    }

    const widget =
      await this.prisma.chatbotWidget.update({
        where: {
          id: existing.id,
        },
        data,
        include: {
          aiAgent: true,
          business: true,
        },
      });

    return {
      success: true,
      widget,
    };
  }

  async remove(
    businessId: string,
    widgetId: string,
  ) {
    const existing =
      await this.prisma.chatbotWidget.findFirst({
        where: {
          businessId,
          widgetId,
        },
      });

    if (!existing) {
      throw new NotFoundException(
        'Widget not found',
      );
    }

    await this.prisma.chatbotWidget.delete({
      where: {
        id: existing.id,
      },
    });

    return {
      success: true,
      message: 'Widget deleted successfully',
    };
  }
}