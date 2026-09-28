import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PrismaModule } from './prisma/prisma.module';

import { AuthModule } from './auth/auth.module';
import { BusinessModule } from './business/business.module';
import { CustomerModule } from './customer/customer.module';
import { ChannelModule } from './channel/channel.module';
import { ConversationModule } from './conversation/conversation.module';
import { MessageModule } from './message/message.module';
import { AiModule } from './ai/ai.module';
import { ProductModule } from './product/product.module';
import { ServiceModule } from './service/service.module';
import { FaqModule } from './faq/faq.module';
import { AiAgentModule } from './ai-agent/ai-agent.module';
import { ChatbotModule } from './chatbot/chatbot.module';
import { WidgetsModule } from './widgets/widgets.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    PrismaModule,

    AuthModule,

    BusinessModule,

    CustomerModule,

    ChannelModule,

    ConversationModule,

    MessageModule,

    AiModule,

    ProductModule,
    
    ServiceModule,

    FaqModule,

    AiAgentModule,

    ChatbotModule,

    WidgetsModule,
  ],

  controllers: [
    AppController,
  ],

  providers: [
    AppService,
  ],
})
export class AppModule {}