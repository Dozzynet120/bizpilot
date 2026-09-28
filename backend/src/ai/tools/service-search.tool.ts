import { Injectable } from '@nestjs/common';

import { ServiceService } from '../../service/service.service';

import {
  AiTool,
  AiToolContext,
  AiToolResult,
} from './ai-tool.interface';

@Injectable()
export class ServiceSearchTool
  implements AiTool
{
  name = 'search_services';

  description =
    'Search the business service catalog for services relevant to the customer request.';

  constructor(
    private readonly serviceService: ServiceService,
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

    const services =
      await this.serviceService.findAll(
        context.businessId,
      );

    const activeServices =
      services.filter(
        (service) =>
          service.active === true,
      );

    if (!query) {
      return {
        success: true,

        tool: this.name,

        data: activeServices,

        message:
          'Returned all active services.',
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
      activeServices.filter(
        (service) => {
          const searchableText =
            [
              service.name,
              service.description ??
                '',
              service.slug,
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
          ? `Found ${matches.length} matching service(s).`
          : 'No matching services found.',
    };
  }
}