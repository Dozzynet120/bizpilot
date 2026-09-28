import {
  IsBoolean,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateConversationDto {
  @IsUUID()
  customerId: string;

  @IsUUID()
  channelConnectionId: string;

  @IsOptional()
  @IsString()
  subject?: string;

  @IsOptional()
  @IsBoolean()
  aiEnabled?: boolean;
}