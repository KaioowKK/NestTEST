import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

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