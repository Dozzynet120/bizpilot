import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';

import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import type { AccessTokenPayload } from '../auth/types/access-token-payload';

@Controller('customers')
@UseGuards(JwtAuthGuard)
export class CustomerController {
  constructor(
    private readonly customerService: CustomerService,
  ) {}

  @Post()
  create(
    @CurrentUser() user: AccessTokenPayload,
    @Body() dto: CreateCustomerDto,
  ) {
    return this.customerService.create(
      user.businessId,
      dto,
    );
  }

  @Get()
  findAll(
    @CurrentUser() user: AccessTokenPayload,
  ) {
    return this.customerService.findAll(
      user.businessId,
    );
  }

  @Get(':id')
  findOne(
    @CurrentUser() user: AccessTokenPayload,
    @Param('id') customerId: string,
  ) {
    return this.customerService.findOne(
      user.businessId,
      customerId,
    );
  }

  @Patch(':id')
  update(
    @CurrentUser() user: AccessTokenPayload,
    @Param('id') customerId: string,
    @Body() dto: UpdateCustomerDto,
  ) {
    return this.customerService.update(
      user.businessId,
      customerId,
      dto,
    );
  }

  @Delete(':id')
  remove(
    @CurrentUser() user: AccessTokenPayload,
    @Param('id') customerId: string,
  ) {
    return this.customerService.remove(
      user.businessId,
      customerId,
    );
  }
}