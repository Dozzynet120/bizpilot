import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BusinessService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async getCurrentBusiness(
    businessId: string,
  ) {
    const business =
      await this.prisma.business.findUnique({
        where: {
          id: businessId,
        },
        include: {
          _count: {
            select: {
              members: true,
              customers: true,
              conversations: true,
              leads: true,
              products: true,
              services: true,
            },
          },
        },
      });

    if (!business) {
      throw new NotFoundException(
        'Business not found.',
      );
    }

    return business;
  }
}