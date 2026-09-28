import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(
    businessId: string,
    dto: CreateCustomerDto,
  ) {
    return this.prisma.customer.create({
      data: {
        businessId,
        firstName: dto.firstName.trim(),
        lastName: dto.lastName.trim(),
        email: dto.email?.trim().toLowerCase(),
        phone: dto.phone?.trim(),
        avatarUrl: dto.avatarUrl?.trim(),
        notes: dto.notes?.trim(),
      },
    });
  }

  async findAll(businessId: string) {
    return this.prisma.customer.findMany({
      where: {
        businessId,
      },
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        _count: {
          select: {
            conversations: true,
            leads: true,
            identities: true,
          },
        },
      },
    });
  }

  async findOne(
    businessId: string,
    customerId: string,
  ) {
    const customer =
      await this.prisma.customer.findFirst({
        where: {
          id: customerId,
          businessId,
        },
        include: {
          identities: true,
          conversations: {
            orderBy: {
              updatedAt: 'desc',
            },
          },
          leads: true,
        },
      });

    if (!customer) {
      throw new NotFoundException(
        'Customer not found.',
      );
    }

    return customer;
  }

  async update(
    businessId: string,
    customerId: string,
    dto: UpdateCustomerDto,
  ) {
    const existing =
      await this.prisma.customer.findFirst({
        where: {
          id: customerId,
          businessId,
        },
      });

    if (!existing) {
      throw new NotFoundException(
        'Customer not found.',
      );
    }

    return this.prisma.customer.update({
      where: {
        id: customerId,
      },
      data: {
        firstName: dto.firstName?.trim(),
        lastName: dto.lastName?.trim(),
        email: dto.email?.trim().toLowerCase(),
        phone: dto.phone?.trim(),
        avatarUrl: dto.avatarUrl?.trim(),
        notes: dto.notes?.trim(),
      },
    });
  }

  async remove(
    businessId: string,
    customerId: string,
  ) {
    const existing =
      await this.prisma.customer.findFirst({
        where: {
          id: customerId,
          businessId,
        },
      });

    if (!existing) {
      throw new NotFoundException(
        'Customer not found.',
      );
    }

    await this.prisma.customer.delete({
      where: {
        id: customerId,
      },
    });

    return {
      message: 'Customer deleted successfully.',
    };
  }
}