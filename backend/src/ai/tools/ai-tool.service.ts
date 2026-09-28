import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import {
  AiTool,
  AiToolContext,
  AiToolResult,
} from './ai-tool.interface';

import { ProductSearchTool } from './product-search.tool';
import { ServiceSearchTool } from './service-search.tool';
import { FaqSearchTool } from './faq-search.tool';

@Injectable()
export class AiToolService {
  private readonly tools: Map<
    string,
    AiTool
  >;

  constructor(
    private readonly productSearchTool: ProductSearchTool,

    private readonly serviceSearchTool: ServiceSearchTool,

    private readonly faqSearchTool: FaqSearchTool,
  ) {
    this.tools = new Map<
      string,
      AiTool
    >([
      [
        productSearchTool.name,
        productSearchTool,
      ],

      [
        serviceSearchTool.name,
        serviceSearchTool,
      ],

      [
        faqSearchTool.name,
        faqSearchTool,
      ],
    ]);
  }

  // ==========================================================
  // LIST AVAILABLE TOOLS
  // ==========================================================

  listTools() {
    return Array.from(
      this.tools.values(),
    ).map((tool) => ({
      name: tool.name,

      description:
        tool.description,
    }));
  }

  // ==========================================================
  // EXECUTE TOOL
  // ==========================================================

  async execute(
    toolName: string,
    input: Record<string, unknown>,
    context: AiToolContext,
  ): Promise<AiToolResult> {
    const tool =
      this.tools.get(toolName);

    if (!tool) {
      throw new NotFoundException(
        `AI tool "${toolName}" was not found.`,
      );
    }

    return tool.execute(
      input,
      context,
    );
  }
}