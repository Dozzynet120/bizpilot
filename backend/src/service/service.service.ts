import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateServiceDto } from './dto/create-service.dto';

@Injectable()
export class ServiceService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(
    businessId: string,
    dto: CreateServiceDto,
  ) {
    const slug = this.createSlug(dto.name);

    return this.prisma.service.create({
      data: {
        businessId,

        name: dto.name.trim(),

        slug,

        description:
          dto.description?.trim(),

        price: dto.price,

        currency:
          dto.currency?.trim() ?? 'NGN',

        active:
          dto.active ?? true,
      },
    });
  }

  async findAll(
    businessId: string,
  ) {
    return this.prisma.service.findMany({
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
    serviceId: string,
  ) {
    const service =
      await this.prisma.service.findFirst({
        where: {
          id: serviceId,
          businessId,
        },
      });

    if (!service) {
      throw new NotFoundException(
        'Service not found.',
      );
    }

    return service;
  }

  async remove(
    businessId: string,
    serviceId: string,
  ) {
    await this.findOne(
      businessId,
      serviceId,
    );

    return this.prisma.service.delete({
      where: {
        id: serviceId,
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