import { Module } from '@nestjs/common';

import { AuthModule } from '../auth/auth.module';
import { WidgetsController } from './widgets.controller';
import { WidgetsService } from './widgets.service';

@Module({
  imports: [AuthModule],
  controllers: [WidgetsController],
  providers: [WidgetsService],
  exports: [WidgetsService],
})
export class WidgetsModule {}