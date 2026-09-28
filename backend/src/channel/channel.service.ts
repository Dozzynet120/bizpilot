import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateChannelDto } from './dto/create-channel.dto';

@Injectable()
export class ChannelService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(
    businessId: string,
    dto: CreateChannelDto,
  ) {
    const connection =
      await this.prisma.channelConnection.create({
        data: {
          businessId,

          channel: dto.channel,

          status: 'CONNECTED',

          externalAccountId:
            dto.externalAccountId?.trim(),

          externalPageId:
            dto.externalPageId?.trim(),

          accountName:
            dto.accountName?.trim(),

          username:
            dto.username?.trim(),

          accessToken:
            dto.accessToken,

          refreshToken:
            dto.refreshToken,

          tokenExpiresAt:
            dto.tokenExpiresAt
              ? new Date(dto.tokenExpiresAt)
              : undefined,
        },
      });

    return this.sanitize(connection);
  }

  async findAll(
    businessId: string,
  ) {
    const connections =
      await this.prisma.channelConnection.findMany({
        where: {
          businessId,
        },

        orderBy: {
          createdAt: 'desc',
        },

        include: {
          _count: {
            select: {
              customers: true,
              conversations: true,
            },
          },
        },
      });

    return connections.map(
      (connection) =>
        this.sanitize(connection),
    );
  }

  async findOne(
    businessId: string,
    channelId: string,
  ) {
    const connection =
      await this.prisma.channelConnection.findFirst({
        where: {
          id: channelId,
          businessId,
        },

        include: {
          _count: {
            select: {
              customers: true,
              conversations: true,
            },
          },
        },
      });

    if (!connection) {
      throw new NotFoundException(
        'Channel connection not found.',
      );
    }

    return this.sanitize(connection);
  }

  private sanitize(connection: any) {
    const {
      accessToken,
      refreshToken,
      ...safeConnection
    } = connection;

    return safeConnection;
  }
}