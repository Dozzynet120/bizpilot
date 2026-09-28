export interface AiToolContext {
  businessId: string;
  conversationId?: string;
  customerId?: string;
}

export interface AiToolResult {
  success: boolean;
  tool: string;
  data: unknown;
  message?: string;
}

export interface AiTool {
  name: string;

  description: string;

  execute(
    input: Record<string, unknown>,
    context: AiToolContext,
  ): Promise<AiToolResult>;
}