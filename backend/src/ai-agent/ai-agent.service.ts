import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

import { CreateAiAgentDto } from './dto/create-ai-agent.dto';
import { UpdateAiAgentDto } from './dto/update-ai-agent.dto';

@Injectable()
export class AiAgentService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(
    businessId: string,
    dto: CreateAiAgentDto,
  ) {
    return this.prisma.aIAgent.create({
      data: {
        businessId,

        name: dto.name.trim(),

        description:
          dto.description?.trim() ?? null,

        type: dto.type ?? 'GENERAL',

        status: dto.status ?? 'DRAFT',

        systemPrompt:
          dto.systemPrompt?.trim() ?? null,

        instructions:
          dto.instructions?.trim() ?? null,

        model:
          dto.model?.trim() ?? null,

        temperature:
          dto.temperature ?? 0.7,
      },
    });
  }

  async findAll(
    businessId: string,
  ) {
    return this.prisma.aIAgent.findMany({
      where: {
        businessId,
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(
    businessId: string,
    agentId: string,
  ) {
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

    return agent;
  }

  async update(
    businessId: string,
    agentId: string,
    dto: UpdateAiAgentDto,
  ) {
    await this.findOne(
      businessId,
      agentId,
    );

    return this.prisma.aIAgent.update({
      where: {
        id: agentId,
      },

      data: {
        ...(dto.name !== undefined && {
          name: dto.name.trim(),
        }),

        ...(dto.description !== undefined && {
          description:
            dto.description.trim(),
        }),

        ...(dto.type !== undefined && {
          type: dto.type,
        }),

        ...(dto.status !== undefined && {
          status: dto.status,
        }),

        ...(dto.systemPrompt !== undefined && {
          systemPrompt:
            dto.systemPrompt.trim(),
        }),

        ...(dto.instructions !== undefined && {
          instructions:
            dto.instructions.trim(),
        }),

        ...(dto.model !== undefined && {
          model: dto.model.trim(),
        }),

        ...(dto.temperature !== undefined && {
          temperature: dto.temperature,
        }),
      },
    });
  }

  async remove(
    businessId: string,
    agentId: string,
  ) {
    await this.findOne(
      businessId,
      agentId,
    );

    return this.prisma.aIAgent.delete({
      where: {
        id: agentId,
      },
    });
  }
}