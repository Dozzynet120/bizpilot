import {
  IsArray,
  IsBoolean,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
} from 'class-validator';

export class CreateWidgetDto {
  @IsOptional()
  @IsString()
  @MaxLength(100)
  name?: string;

  @IsOptional()
  @IsUrl()
  logoUrl?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'primaryColor must be a valid hex color such as #2563EB',
  })
  primaryColor?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'secondaryColor must be a valid hex color such as #0F172A',
  })
  secondaryColor?: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  welcomeMessage?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  greeting?: string;

  @IsOptional()
  @IsString()
  position?: string;

  @IsOptional()
  @IsString()
  aiAgentId?: string;

  @IsOptional()
  @IsBoolean()
  enabled?: boolean;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  allowedDomains?: string[];
}