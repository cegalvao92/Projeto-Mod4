import { Module } from '@nestjs/common';
import { GenerosService } from './generos.service';
import { GenerosController } from './generos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [GenerosController],
  providers: [GenerosService],
  imports: [PrismaModule],
})
export class GenerosModule {}
