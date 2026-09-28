import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(
    businessId: string,
    dto: CreateProductDto,
  ) {
    const slug = this.createSlug(dto.name);

    return this.prisma.product.create({
      data: {
        businessId,

        name: dto.name.trim(),

        slug,

        description:
          dto.description?.trim(),

        price: dto.price,

        currency:
          dto.currency?.trim() ?? 'NGN',

        status:
          dto.status ?? 'ACTIVE',
      },
    });
  }

  async findAll(
    businessId: string,
  ) {
    return this.prisma.product.findMany({
      where: {
        businessId,
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(
    businessId: string,
    productId: string,
  ) {
    const product =
      await this.prisma.product.findFirst({
        where: {
          id: productId,
          businessId,
        },
      });

    if (!product) {
      throw new NotFoundException(
        'Product not found.',
      );
    }

    return product;
  }

  async remove(
    businessId: string,
    productId: string,
  ) {
    await this.findOne(
      businessId,
      productId,
    );

    return this.prisma.product.delete({
      where: {
        id: productId,
      },
    });
  }

  private createSlug(
    name: string,
  ): string {
    return name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
}