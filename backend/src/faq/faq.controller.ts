import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';

import { FaqService } from './faq.service';
import { CreateFaqDto } from './dto/create-faq.dto';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

import type { AccessTokenPayload } from '../auth/types/access-token-payload';

@Controller('faqs')
@UseGuards(JwtAuthGuard)
export class FaqController {
  constructor(
    private readonly faqService: FaqService,
  ) {}

  @Post()
  create(
    @CurrentUser() user: AccessTokenPayload,
    @Body() dto: CreateFaqDto,
  ) {
    return this.faqService.create(
      user.businessId,
      dto,
    );
  }

  @Get()
  findAll(
    @CurrentUser() user: AccessTokenPayload,
  ) {
    return this.faqService.findAll(
      user.businessId,
    );
  }

  @Get(':id')
  findOne(
    @CurrentUser() user: AccessTokenPayload,
    @Param('id') faqId: string,
  ) {
    return this.faqService.findOne(
      user.businessId,
      faqId,
    );
  }

  @Delete(':id')
  remove(
    @CurrentUser() user: AccessTokenPayload,
    @Param('id') faqId: string,
  ) {
    return this.faqService.remove(
      user.businessId,
      faqId,
    );
  }
}