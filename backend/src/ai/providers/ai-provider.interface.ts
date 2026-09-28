export interface AiGenerateRequest {
  systemPrompt: string;

  conversation: Array<{
    role: 'user' | 'assistant';
    content: string;
  }>;

  model?: string;

  temperature?: number;
}

export interface AiGenerateResponse {
  content: string;

  model: string;

  confidence: number;
}

export interface AiProvider {
  generate(
    request: AiGenerateRequest,
  ): Promise<AiGenerateResponse>;
}