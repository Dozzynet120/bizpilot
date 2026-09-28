import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';

import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

import type { AccessTokenPayload } from '../auth/types/access-token-payload';

@Controller('services')
@UseGuards(JwtAuthGuard)
export class ServiceController {
  constructor(
    private readonly serviceService: ServiceService,
  ) {}

  @Post()
  create(
    @CurrentUser() user: AccessTokenPayload,
    @Body() dto: CreateServiceDto,
  ) {
    return this.serviceService.create(
      user.businessId,
      dto,
    );
  }

  @Get()
  findAll(
    @CurrentUser() user: AccessTokenPayload,
  ) {
    return this.serviceService.findAll(
      user.businessId,
    );
  }

  @Get(':id')
  findOne(
    @CurrentUser() user: AccessTokenPayload,
    @Param('id') serviceId: string,
  ) {
    return this.serviceService.findOne(
      user.businessId,
      serviceId,
    );
  }

  @Delete(':id')
  remove(
    @CurrentUser() user: AccessTokenPayload,
    @Param('id') serviceId: string,
  ) {
    return this.serviceService.remove(
      user.businessId,
      serviceId,
    );
  }
}