import { Module } from '@nestjs/common';
import { FilmesModule } from 'src/filmes/filmes.module';
import { GenerosModule } from 'src/generos/generos.module';
import { ParticipantesModule } from 'src/participantes/participantes.module';
import { PrismaModule } from './prisma/prisma.module';


@Module({
  imports: [FilmesModule, GenerosModule, ParticipantesModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
