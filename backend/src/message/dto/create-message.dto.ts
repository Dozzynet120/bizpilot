import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

import {
  MessageDirection,
  MessageSenderType,
  MessageType,
} from '../../generated/prisma/enums';

export class CreateMessageDto {
  @IsEnum(MessageDirection)
  direction: MessageDirection;

  @IsEnum(MessageSenderType)
  senderType: MessageSenderType;

  @IsOptional()
  @IsEnum(MessageType)
  type?: MessageType;

  @IsOptional()
  @IsString()
  content?: string;

  @IsOptional()
  @IsString()
  mediaUrl?: string;

  @IsOptional()
  @IsString()
  externalMessageId?: string;

  @IsOptional()
  @IsBoolean()
  aiGenerated?: boolean;

  @IsOptional()
  @IsString()
  aiModel?: string;

  @IsOptional()
  @IsNumber()
  aiConfidence?: number;
}