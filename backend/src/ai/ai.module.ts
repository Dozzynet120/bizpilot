import { Module } from '@nestjs/common';

import { AiController } from './ai.controller';
import { AiService } from './ai.service';

import { KnowledgeModule } from './knowledge/knowledge.module';
import { ProvidersModule } from './providers/providers.module';
import { AiToolModule } from './tools/ai-tool.module';

import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    AuthModule,
    KnowledgeModule,
    ProvidersModule,
    AiToolModule,
  ],

  controllers: [
    AiController,
  ],

  providers: [
    AiService,
  ],

  exports: [
    AiService,
  ],
})
export class AiModule {}