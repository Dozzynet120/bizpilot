import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import type { AccessTokenPayload } from '../auth/types/access-token-payload';

import { AiAgentService } from './ai-agent.service';

import { CreateAiAgentDto } from './dto/create-ai-agent.dto';
import { UpdateAiAgentDto } from './dto/update-ai-agent.dto';

@Controller('ai-agents')
@UseGuards(JwtAuthGuard)
export class AiAgentController {
  constructor(
    private readonly aiAgentService: AiAgentService,
  ) {}

  @Post()
  create(
    @CurrentUser() user: AccessTokenPayload,
    @Body() dto: CreateAiAgentDto,
  ) {
    return this.aiAgentService.create(
      user.businessId,
      dto,
    );
  }

  @Get()
  findAll(
    @CurrentUser() user: AccessTokenPayload,
  ) {
    return this.aiAgentService.findAll(
      user.businessId,
    );
  }

  @Get(':id')
  findOne(
    @CurrentUser() user: AccessTokenPayload,
    @Param('id') agentId: string,
  ) {
    return this.aiAgentService.findOne(
      user.businessId,
      agentId,
    );
  }

  @Patch(':id')
  update(
    @CurrentUser() user: AccessTokenPayload,
    @Param('id') agentId: string,
    @Body() dto: UpdateAiAgentDto,
  ) {
    return this.aiAgentService.update(
      user.businessId,
      agentId,
      dto,
    );
  }

  @Delete(':id')
  remove(
    @CurrentUser() user: AccessTokenPayload,
    @Param('id') agentId: string,
  ) {
    return this.aiAgentService.remove(
      user.businessId,
      agentId,
    );
  }
}