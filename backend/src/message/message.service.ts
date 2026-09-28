import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class MessageService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(
    businessId: string,
    conversationId: string,
    dto: CreateMessageDto,
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

    const message =
      await this.prisma.message.create({
        data: {
          conversationId,

          direction:
            dto.direction,

          senderType:
            dto.senderType,

          type:
            dto.type ?? 'TEXT',

          content:
            dto.content?.trim(),

          mediaUrl:
            dto.mediaUrl?.trim(),

          externalMessageId:
            dto.externalMessageId?.trim(),

          aiGenerated:
            dto.aiGenerated ?? false,

          aiModel:
            dto.aiModel?.trim(),

          aiConfidence:
            dto.aiConfidence,
        },
      });

    await this.prisma.conversation.update({
      where: {
        id: conversationId,
      },

      data: {
        lastMessageAt:
          message.createdAt,
      },
    });

    return message;
  }

  async findAll(
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

    return this.prisma.message.findMany({
      where: {
        conversationId,
      },

      orderBy: {
        createdAt: 'asc',
      },
    });
  }
}