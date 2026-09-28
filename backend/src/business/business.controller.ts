import {
  Controller,
  Get,
  UseGuards,
} from '@nestjs/common';

import { BusinessService } from './business.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import type { AccessTokenPayload } from '../auth/types/access-token-payload';

@Controller('business')
@UseGuards(JwtAuthGuard)
export class BusinessController {
  constructor(
    private readonly businessService: BusinessService,
  ) {}

  @Get()
  getCurrentBusiness(
    @CurrentUser() user: AccessTokenPayload,
  ) {
    return this.businessService.getCurrentBusiness(
      user.businessId,
    );
  }
}