import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';

import { ChannelService } from './channel.service';
import { CreateChannelDto } from './dto/create-channel.dto';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

import type { AccessTokenPayload } from '../auth/types/access-token-payload';

@Controller('channels')
@UseGuards(JwtAuthGuard)
export class ChannelController {
  constructor(
    private readonly channelService: ChannelService,
  ) {}

  @Post()
  create(
    @CurrentUser() user: AccessTokenPayload,
    @Body() dto: CreateChannelDto,
  ) {
    return this.channelService.create(
      user.businessId,
      dto,
    );
  }

  @Get()
  findAll(
    @CurrentUser() user: AccessTokenPayload,
  ) {
    return this.channelService.findAll(
      user.businessId,
    );
  }

  @Get(':id')
  findOne(
    @CurrentUser() user: AccessTokenPayload,
    @Param('id') channelId: string,
  ) {
    return this.channelService.findOne(
      user.businessId,
      channelId,
    );
  }
}