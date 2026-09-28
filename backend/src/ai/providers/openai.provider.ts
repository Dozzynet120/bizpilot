import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

import {
  AiGenerateRequest,
  AiGenerateResponse,
  AiProvider,
} from './ai-provider.interface';

@Injectable()
export class OpenAiProvider implements AiProvider {
  private readonly client: OpenAI;

  constructor() {
    const apiKey =
      process.env.OPENAI_API_KEY;

    if (!apiKey) {
      throw new Error(
        'OPENAI_API_KEY is not configured.',
      );
    }

    this.client = new OpenAI({
      apiKey,
    });
  }

  async generate(
    request: AiGenerateRequest,
  ): Promise<AiGenerateResponse> {
    const model =
      request.model ??
      'gpt-5.6-luna';

    const response =
      await this.client.responses.create({
        model,

        instructions:
          request.systemPrompt,

        input:
          request.conversation.map(
            (message) => ({
              role: message.role,
              content: message.content,
            }),
          ),

        temperature:
          request.temperature ??
          0.7,
      });

    return {
      content:
        response.output_text?.trim() ||
        'I am sorry, but I could not generate a response right now.',

      model,

      confidence: 0.95,
    };
  }
}