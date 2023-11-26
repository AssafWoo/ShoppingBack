import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTipDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  organizationId: string;

  @IsString()
  tip: string;

  @IsString()
  prompt: string;

  @IsString()
  @IsOptional()
  tipField?: string; // like 'diet tip', 'budget tip', etc.
}

