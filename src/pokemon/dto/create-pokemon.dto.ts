import { IsInt, IsString, MinLength, IsPositive, Min } from 'class-validator';
export class CreatePokemonDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsInt()
  @Min(1) //Sirve para validar que el numero sea mayor a 1
  @IsPositive()
  no: number;
}
