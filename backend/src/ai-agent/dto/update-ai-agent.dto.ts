import { IsEnum, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';
import { AIAgentStatus, AIAgentType } from '../../generated/prisma/enums';

export class UpdateAiAgentDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(AIAgentType)
  type?: AIAgentType;

  @IsOptional()
  @IsEnum(AIAgentStatus)
  status?: AIAgentStatus;

  @IsOptional()
  @IsString()
  systemPrompt?: string;

  @IsOptional()
  @IsString()
  instructions?: string;

  @IsOptional()
  @IsString()
  model?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(2)
  temperature?: number;
}