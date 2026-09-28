import {
  IsBoolean,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateFaqDto {
  @IsString()
  question: string;

  @IsString()
  answer: string;

  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}