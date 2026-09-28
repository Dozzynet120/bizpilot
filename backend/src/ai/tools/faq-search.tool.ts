import { Injectable } from '@nestjs/common';

import { FaqService } from '../../faq/faq.service';

import {
  AiTool,
  AiToolContext,
  AiToolResult,
} from './ai-tool.interface';

@Injectable()
export class FaqSearchTool
  implements AiTool
{
  name = 'search_faqs';

  description =
    'Search the business FAQ knowledge base for answers relevant to the customer question.';

  constructor(
    private readonly faqService: FaqService,
  ) {}

  async execute(
    input: Record<string, unknown>,
    context: AiToolContext,
  ): Promise<AiToolResult> {
    const query =
      typeof input.query === 'string'
        ? input.query
            .trim()
            .toLowerCase()
        : '';

    const faqs =
      await this.faqService.findAll(
        context.businessId,
      );

    const activeFaqs =
      faqs.filter(
        (faq) =>
          faq.active === true,
      );

    if (!query) {
      return {
        success: true,

        tool: this.name,

        data: activeFaqs,

        message:
          'Returned all active FAQs.',
      };
    }

    const queryWords =
      query
        .split(/\s+/)
        .filter(
          (word) =>
            word.length > 2,
        );

    const matches =
      activeFaqs.filter(
        (faq) => {
          const searchableText =
            [
              faq.question,
              faq.answer,
              faq.category ??
                '',
            ]
              .join(' ')
              .toLowerCase();

          return queryWords.some(
            (word) =>
              searchableText.includes(
                word,
              ),
          );
        },
      );

    return {
      success: true,

      tool: this.name,

      data: matches,

      message:
        matches.length > 0
          ? `Found ${matches.length} matching FAQ(s).`
          : 'No matching FAQs found.',
    };
  }
}