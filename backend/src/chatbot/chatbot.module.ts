import { Module } from '@nestjs/common';

import { ChatbotController } from './chatbot.controller';
import { ChatbotService } from './chatbot.service';

import { PrismaModule } from '../prisma/prisma.module';
import { ConversationModule } from '../conversation/conversation.module';
import { CustomerModule } from '../customer/customer.module';
import { AiAgentModule } from '../ai-agent/ai-agent.module';
import { AiModule } from '../ai/ai.module';

@Module({
  imports: [
    PrismaModule,
    ConversationModule,
    CustomerModule,
    AiAgentModule,
    AiModule,
  ],

  controllers: [
    ChatbotController,
  ],

  providers: [
    ChatbotService,
  ],

  exports: [
    ChatbotService,
  ],
})
export class ChatbotModule {}