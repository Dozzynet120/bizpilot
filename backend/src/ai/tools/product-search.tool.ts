import { Injectable } from '@nestjs/common';

import { ProductService } from '../../product/product.service';

import {
  AiTool,
  AiToolContext,
  AiToolResult,
} from './ai-tool.interface';

@Injectable()
export class ProductSearchTool
  implements AiTool
{
  name = 'search_products';

  description =
    'Search the business product catalog for products relevant to the customer request.';

  constructor(
    private readonly productService: ProductService,
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

    const products =
      await this.productService.findAll(
        context.businessId,
      );

    const activeProducts =
      products.filter(
        (product) =>
          product.status === 'ACTIVE',
      );

    if (!query) {
      return {
        success: true,

        tool: this.name,

        data: activeProducts,

        message:
          'Returned all active products.',
      };
    }

    const queryWords =
      query
        .split(/\s+/)
        .filter(
          (word) =>
            word.length > 1,
        );

    const matches =
      activeProducts.filter(
        (product) => {
          const searchableText =
            [
              product.name,
              product.description ??
                '',
              product.slug,
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
          ? `Found ${matches.length} matching product(s).`
          : 'No matching products found.',
    };
  }
}