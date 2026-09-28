import { Module } from '@nestjs/common';

import { AuthModule } from '../auth/auth.module';

import { ChannelController } from './channel.controller';
import { ChannelService } from './channel.service';

@Module({
  imports: [
    AuthModule,
  ],

  controllers: [
    ChannelController,
  ],

  providers: [
    ChannelService,
  ],
})
export class ChannelModule {}