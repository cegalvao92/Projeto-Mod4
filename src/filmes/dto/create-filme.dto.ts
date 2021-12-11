/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsInt, IsString } from 'class-validator';

export class CreateFilmeDto {
  id: number;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  imagem: string;

  @IsNotEmpty()
  @IsString()
  data_lancamento: string;

  @IsNotEmpty()
  @IsString()
  tempo_duracao: string;

  @IsNotEmpty()
  @IsInt()
  generoid: number;

  @IsNotEmpty()
  @IsInt()
  participantesid: number;
}

