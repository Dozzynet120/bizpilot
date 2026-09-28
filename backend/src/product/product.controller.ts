import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';

import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

import type { AccessTokenPayload } from '../auth/types/access-token-payload';

@Controller('products')
@UseGuards(JwtAuthGuard)
export class ProductController {
  constructor(
    private readonly productService: ProductService,
  ) {}

  @Post()
  create(
    @CurrentUser() user: AccessTokenPayload,
    @Body() dto: CreateProductDto,
  ) {
    return this.productService.create(
      user.businessId,
      dto,
    );
  }

  @Get()
  findAll(
    @CurrentUser() user: AccessTokenPayload,
  ) {
    return this.productService.findAll(
      user.businessId,
    );
  }

  @Get(':id')
  findOne(
    @CurrentUser() user: AccessTokenPayload,
    @Param('id') productId: string,
  ) {
    return this.productService.findOne(
      user.businessId,
      productId,
    );
  }

  @Delete(':id')
  remove(
    @CurrentUser() user: AccessTokenPayload,
    @Param('id') productId: string,
  ) {
    return this.productService.remove(
      user.businessId,
      productId,
    );
  }
}