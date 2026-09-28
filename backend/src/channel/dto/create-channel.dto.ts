import {
  IsEnum,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

import {
  ChannelType,
} from '../../generated/prisma/enums';

export class CreateChannelDto {
  @IsEnum(ChannelType)
  channel: ChannelType;

  @IsOptional()
  @IsString()
  externalAccountId?: string;

  @IsOptional()
  @IsString()
  externalPageId?: string;

  @IsOptional()
  @IsString()
  accountName?: string;

  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  accessToken?: string;

  @IsOptional()
  @IsString()
  refreshToken?: string;

  @IsOptional()
  tokenExpiresAt?: string;

  @IsOptional()
  @IsUrl()
  metadataUrl?: string;
}