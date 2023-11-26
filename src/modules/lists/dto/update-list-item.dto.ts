// update-list-item.dto.ts

import { IsOptional, IsString, IsNumber, Length } from 'class-validator';

export class UpdateListItemDto {
  @IsOptional()
  @IsString()
  @Length(0, 255)
  description?: string;

  @IsOptional()
  @IsNumber()
  amountOfUnits?: number;

  @IsOptional()
  @IsString()
  @Length(1, 255)
  assignee?: string;

  @IsOptional()
  @IsString()
  @Length(1, 255)
  name?: string;

}