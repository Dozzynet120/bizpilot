import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';

import { ConversationService } from './conversation.service';
import { CreateConversationDto } from './dto/create-conversation.dto';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import type { AccessTokenPayload } from '../auth/types/access-token-payload';

@Controller('conversations')
@UseGuards(JwtAuthGuard)
export class ConversationController {
  constructor(
    private readonly conversationService: ConversationService,
  ) {}

  // ============================================================
  // CREATE CONVERSATION
  // ============================================================

  @Post()
  create(
    @CurrentUser() user: AccessTokenPayload,
    @Body() dto: CreateConversationDto,
  ) {
    return this.conversationService.create(
      user.businessId,
      dto,
    );
  }

  // ============================================================
  // GET ALL CONVERSATIONS
  // ============================================================

  @Get()
  findAll(
    @CurrentUser() user: AccessTokenPayload,
  ) {
    return this.conversationService.findAll(
      user.businessId,
    );
  }

  // ============================================================
  // GET SINGLE CONVERSATION
  // ============================================================

  @Get(':id')
  findOne(
    @CurrentUser() user: AccessTokenPayload,
    @Param('id') conversationId: string,
  ) {
    return this.conversationService.findOne(
      user.businessId,
      conversationId,
    );
  }

  // ============================================================
  // ASSIGN AI AGENT
  // ============================================================

  @Patch(':id/agent')
  assignAgent(
    @CurrentUser() user: AccessTokenPayload,
    @Param('id') conversationId: string,
    @Body('agentId') agentId: string,
  ) {
    return this.conversationService.assignAgent(
      user.businessId,
      conversationId,
      agentId,
    );
  }

  // ============================================================
  // REMOVE AI AGENT
  // ============================================================

  @Patch(':id/agent/remove')
  removeAgent(
    @CurrentUser() user: AccessTokenPayload,
    @Param('id') conversationId: string,
  ) {
    return this.conversationService.removeAgent(
      user.businessId,
      conversationId,
    );
  }

  // ============================================================
  // UPDATE CONVERSATION STATUS
  // ============================================================

  @Patch(':id/status')
  updateStatus(
    @CurrentUser() user: AccessTokenPayload,
    @Param('id') conversationId: string,
    @Body('status')
    status:
      | 'OPEN'
      | 'PENDING'
      | 'RESOLVED'
      | 'ARCHIVED',
  ) {
    return this.conversationService.updateStatus(
      user.businessId,
      conversationId,
      status,
    );
  }
}