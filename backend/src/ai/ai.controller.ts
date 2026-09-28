import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';

import { AiService } from './ai.service';
import { AiToolService } from './tools/ai-tool.service';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

import type { AccessTokenPayload } from '../auth/types/access-token-payload';

@Controller('ai')
@UseGuards(JwtAuthGuard)
export class AiController {
  constructor(
    private readonly aiService: AiService,

    private readonly aiToolService: AiToolService,
  ) {}

  // ============================================================
  // GENERATE AI RESPONSE
  // ============================================================

  @Post(
    'conversations/:conversationId/respond',
  )
  generateResponse(
    @CurrentUser() user: AccessTokenPayload,

    @Param('conversationId')
    conversationId: string,
  ) {
    return this.aiService.generateResponse(
      user.businessId,
      conversationId,
    );
  }

  // ============================================================
  // LIST AVAILABLE AI TOOLS
  // ============================================================

  @Get('tools')
  listTools() {
    return this.aiToolService.listTools();
  }

  // ============================================================
  // EXECUTE AI TOOL
  // ============================================================

  @Post('tools/:toolName')
  executeTool(
    @CurrentUser() user: AccessTokenPayload,

    @Param('toolName')
    toolName: string,

    @Body()
    input: Record<string, unknown>,
  ) {
    return this.aiToolService.execute(
      toolName,
      input,
      {
        businessId:
          user.businessId,
      },
    );
  }
}