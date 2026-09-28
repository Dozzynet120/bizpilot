import {
  Body,
  Controller,
  Get,
  Headers,
  Param,
  Post,
} from '@nestjs/common';

import { ChatbotService } from './chatbot.service';

import { CreateChatbotSessionDto } from './dto/create-chatbot-session.dto';
import { SendChatbotMessageDto } from './dto/send-chatbot-message.dto';

@Controller('chatbot')
export class ChatbotController {
  constructor(
    private readonly chatbotService: ChatbotService,
  ) {}

  /**
   * -------------------------------------------------------
   * Public chatbot session endpoint
   * -------------------------------------------------------
   *
   * No JwtAuthGuard here because website visitors
   * are not authenticated BizPilot users.
   *
   * The browser Origin header is passed to the service
   * so the widget's allowedDomains can be enforced.
   */
  @Post('session')
  async createSession(
    @Body() dto: CreateChatbotSessionDto,

    @Headers('origin') origin?: string,
  ) {
    return this.chatbotService.createSession(
      dto,
      origin,
    );
  }

  /**
   * -------------------------------------------------------
   * Public visitor message endpoint
   * -------------------------------------------------------
   *
   * The Origin is checked against the widget's
   * allowedDomains before accepting the message.
   */
  @Post('session/:conversationId/message')
  async sendMessage(
    @Param('conversationId') conversationId: string,

    @Body() dto: SendChatbotMessageDto,

    @Headers('origin') origin?: string,
  ) {
    return this.chatbotService.sendMessage(
      conversationId,
      dto.message,
      origin,
    );
  }

  /**
   * -------------------------------------------------------
   * Restore chatbot session
   * -------------------------------------------------------
   *
   * The Origin is also validated here so an attacker
   * cannot simply obtain a conversation ID and read
   * the conversation from another website.
   */
  @Get('session/:conversationId')
  async getSession(
    @Param('conversationId') conversationId: string,

    @Headers('origin') origin?: string,
  ) {
    return this.chatbotService.getSession(
      conversationId,
      origin,
    );
  }
}