import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateFaqDto } from './dto/create-faq.dto';

@Injectable()
export class FaqService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(
    businessId: string,
    dto: CreateFaqDto,
  ) {
    return this.prisma.fAQ.create({
      data: {
        businessId,

        question:
          dto.question.trim(),

        answer:
          dto.answer.trim(),

        category:
          dto.category?.trim(),

        active:
          dto.active ?? true,
      },
    });
  }

  async findAll(
    businessId: string,
  ) {
    return this.prisma.fAQ.findMany({
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
    faqId: string,
  ) {
    const faq =
      await this.prisma.fAQ.findFirst({
        where: {
          id: faqId,
          businessId,
        },
      });

    if (!faq) {
      throw new NotFoundException(
        'FAQ not found.',
      );
    }

    return faq;
  }

  async remove(
    businessId: string,
    faqId: string,
  ) {
    await this.findOne(
      businessId,
      faqId,
    );

    return this.prisma.fAQ.delete({
      where: {
        id: faqId,
      },
    });
  }
}