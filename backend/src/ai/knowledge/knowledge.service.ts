import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { KnowledgeContext } from './knowledge.types';

@Injectable()
export class KnowledgeService {
  constructor(private readonly prisma: PrismaService) {}

  async getBusinessKnowledge(
    businessId: string,
    customerMessage: string,
  ): Promise<KnowledgeContext> {
    const intent = this.detectIntent(customerMessage);

    const [products, services, faqs] = await Promise.all([
      this.prisma.product.findMany({
        where: {
          businessId,
          status: 'ACTIVE',
        },
        orderBy: {
          createdAt: 'desc',
        },
      }),

      this.prisma.service.findMany({
        where: {
          businessId,
          active: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
      }),

      this.prisma.fAQ.findMany({
        where: {
          businessId,
          active: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
      }),
    ]);

    const searchTerms = this.extractSearchTerms(customerMessage);

    let relevantProducts = products.filter((product) =>
      this.isRelevant(
        `${product.name} ${product.description ?? ''}`,
        searchTerms,
      ),
    );

    let relevantServices = services.filter((service) =>
      this.isRelevant(
        `${service.name} ${service.description ?? ''}`,
        searchTerms,
      ),
    );

    let relevantFaqs = faqs.filter((faq) =>
      this.isRelevant(
        `${faq.question} ${faq.answer} ${faq.category ?? ''}`,
        searchTerms,
      ),
    );

    /*
     * Pricing intent:
     * When the customer asks about price, cost,
     * subscription, plans, fees, etc., include
     * the business's pricing knowledge.
     */
    if (intent === 'PRICING') {
      relevantProducts = products.filter(
        (product) =>
          product.price !== null &&
          product.price !== undefined,
      );

      relevantServices = services.filter(
        (service) =>
          service.price !== null &&
          service.price !== undefined,
      );

      relevantFaqs = faqs.filter(
        (faq) =>
          this.isPricingText(faq.question) ||
          this.isPricingText(faq.answer) ||
          faq.category?.toLowerCase() === 'pricing',
      );
    }

    /*
     * If nothing matched, provide the business's
     * active knowledge so the AI can still reason
     * from the available business information.
     */
    if (
      relevantProducts.length === 0 &&
      relevantServices.length === 0 &&
      relevantFaqs.length === 0
    ) {
      relevantProducts = products.slice(0, 10);
      relevantServices = services.slice(0, 10);
      relevantFaqs = faqs.slice(0, 10);
    }

    return {
      products: relevantProducts.map((product) => ({
        name: product.name,
        description: product.description,
        price: product.price?.toString() ?? null,
        currency: product.currency,
      })),

      services: relevantServices.map((service) => ({
        name: service.name,
        description: service.description,
        price: service.price?.toString() ?? null,
        currency: service.currency,
      })),

      faqs: relevantFaqs.map((faq) => ({
        question: faq.question,
        answer: faq.answer,
        category: faq.category,
      })),
    };
  }

  private detectIntent(message: string): string {
    const text = message.toLowerCase();

    if (
      text.includes('price') ||
      text.includes('pricing') ||
      text.includes('cost') ||
      text.includes('subscription') ||
      text.includes('plan') ||
      text.includes('plans') ||
      text.includes('fee') ||
      text.includes('fees') ||
      text.includes('how much') ||
      text.includes('monthly') ||
      text.includes('payment')
    ) {
      return 'PRICING';
    }

    if (
      text.includes('service') ||
      text.includes('services') ||
      text.includes('what do you offer') ||
      text.includes('offer')
    ) {
      return 'SERVICES';
    }

    if (
      text.includes('product') ||
      text.includes('products') ||
      text.includes('what do you sell')
    ) {
      return 'PRODUCTS';
    }

    return 'GENERAL';
  }

  private extractSearchTerms(message: string): string[] {
    return message
      .toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter((word) => word.length >= 3);
  }

  private isRelevant(
    text: string,
    searchTerms: string[],
  ): boolean {
    const normalizedText = text.toLowerCase();

    return searchTerms.some((term) =>
      normalizedText.includes(term),
    );
  }

  private isPricingText(text: string): boolean {
    const normalizedText = text.toLowerCase();

    return (
      normalizedText.includes('price') ||
      normalizedText.includes('pricing') ||
      normalizedText.includes('cost') ||
      normalizedText.includes('subscription') ||
      normalizedText.includes('plan') ||
      normalizedText.includes('fee') ||
      normalizedText.includes('monthly') ||
      normalizedText.includes('payment') ||
      normalizedText.includes('₦')
    );
  }
}