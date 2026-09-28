import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';

import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

import type { AccessTokenPayload } from '../auth/types/access-token-payload';

@Controller('conversations/:conversationId/messages')
@UseGuards(JwtAuthGuard)
export class MessageController {
  constructor(
    private readonly messageService: MessageService,
  ) {}

  @Post()
  create(
    @CurrentUser() user: AccessTokenPayload,

    @Param('conversationId')
    conversationId: string,

    @Body()
    dto: CreateMessageDto,
  ) {
    return this.messageService.create(
      user.businessId,
      conversationId,
      dto,
    );
  }

  @Get()
  findAll(
    @CurrentUser() user: AccessTokenPayload,

    @Param('conversationId')
    conversationId: string,
  ) {
    return this.messageService.findAll(
      user.businessId,
      conversationId,
    );
  }
}