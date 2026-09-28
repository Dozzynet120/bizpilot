import { Module } from '@nestjs/common';

import { AuthModule } from '../auth/auth.module';

import { AiAgentController } from './ai-agent.controller';
import { AiAgentService } from './ai-agent.service';

@Module({
  imports: [
    AuthModule,
  ],

  controllers: [
    AiAgentController,
  ],

  providers: [
    AiAgentService,
  ],
})
export class AiAgentModule {}