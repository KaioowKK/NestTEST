import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateUserDto {

  @IsString()
  @IsOptional()
  characterName?: string;

  @IsString()
  @IsOptional()
  characterClass?: string;

  @IsNumber()
  @IsOptional()
  characterLevel?: number;

  @IsNumber()
  @IsOptional()
  accountCash?: number;
}