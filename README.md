# API REST com NestJS, Prisma e PostgreSQL

### Filmes.controller.ts

- Importação do Decorator chamado Controller e das rotas utilizadas para requisições HTTP:

  ```javascript
  import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
  ```

- Importação da classe FilmeService para recuperar os dados armazenados:

  ```javascript
  import { FilmesService } from './filmes.service';
  ```

- Importação do CreateFilmeDto e UpdateFilmeDto utilizando plug-in Swagger:

  ```javascript
  import { CreateFilmeDto } from './dto/create-filme.dto';
  ```

  ```javascript
  import { UpdateFilmeDto } from './dto/update-filme.dto';
  ```

- É criado um decorator para a classe filmes, indicado ao decorator que todas as rotas começam com /filmes:

  ```javascript
  @Controller('filmes')
  ```

- Exportando a classe FilmesController juntamente com seus métodos:

  ```javascript
  export class FilmesController {
  ```

- É criado um constructor para inicializar a classe FilmesService, invocando os campos internos da classe.

- É do tipo private, ou seja, um método de encapsulamento definindo o acesso apenas dentro da classe.

- É utilizado o readonly, tornando a propriedade somente de leitura.

  ```javascript
  constructor(private readonly filmesService: FilmesService) {}
  ```

- O decorator @Post é utilizado para criar um requisição de adição de um novo filme, utilizando o createFilmeDto.

- Como retorno o filmesService será chamado utilizando o método create.

  ```javascript
  @Post()
    create(@Body() createFilmeDto: CreateFilmeDto) {
      return this.filmesService.create(createFilmeDto);
    }
  ```

- O decorator @Get é utilizado para criar um requisição de chamada de todos os filmes cadastrados, utilizando o método findAll().

- Como retorno o filmesService será chamado utilizando o método findAll().

  ```javascript
  @Get()
    findAll() {
      return this.filmesService.findAll();
    }
  ```

- O decorator @Get é utilizado para criar um requisição de chamada por id dos filmes cadastrados, utilizando o método findOne.

- Como retorno o filmesService será chamado utilizando o método findOne.

  ```javascript
  @Get(':id')
    findOne(@Param('id') id: string) {
      return this.filmesService.findOne(+id);
    }
  ```

- O decorator @Patch é utilizado para criar um requisição de atualização dos filmes ou do campo dos filmes cadastrados, utilizando o método update.

- Como retorno o filmesService será chamado utilizando o método update.

  ```javascript
  @Patch(':id')
    update(@Param('id') id: string, @Body() updateFilmeDto: UpdateFilmeDto) {
      return this.filmesService.update(+id, updateFilmeDto);
    }
  ```

- O decorator @Delete é utilizado para criar um requisição de deleção do filme pelo seu id, utilizando o método remove.

- Como retorno o filmesService será chamado utilizando o método remove.

  ```javascript
  @Delete(':id')
    remove(@Param('id') id: string) {
      return this.filmesService.remove(+id);
    }
  ```

------

### Generos.controller.ts

- Importação do Decorator chamado Controller e das rotas utilizadas para requisições HTTP:

  ```javascript
  import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
  ```

- Importação da classe GenerosService para recuperar os dados armazenados:

  ```javascript
  import { GenerosService } from './generos.service';
  ```

- Importação do CreateGeneroDto e UpdateGeneroDto utilizando plug-in Swagger:

  ```javascript
  import { CreateGeneroDto } from './dto/create-genero.dto';
  ```

  ```javascript
  import { UpdateGeneroDto } from './dto/update-genero.dto';
  ```

- É criado um decorator para a classe generos, indicado ao decorator que todas as rotas começam com /generos:

  ```javascript
  @Controller('generos')
  ```

- Exportando a classe GenerosController juntamente com seus métodos:

  ```javascript
  export class GenerosController {
  ```

- É criado um constructor para inicializar a classe generosService, invocando os campos internos da classe.

- É do tipo private, ou seja, um método de encapsulamento definindo o acesso apenas dentro da classe.

- É utilizado o readonly, tornando a propriedade somente de leitura.

  ```javascript
  constructor(private readonly generosService: GenerosService) {}
  ```

- O decorator @Post é utilizado para criar um requisição de adição de um novo genero, utilizando o createGeneroDto.

- Como retorno o generosService será chamado utilizando o método create.

  ```javascript
  @Post()
    create(@Body() createGeneroDto: CreateGeneroDto) {
      return this.generosService.create(createGeneroDto);
   }
  ```

- O decorator @Get é utilizado para criar um requisição de chamada de todos os generos cadastrados, utilizando o método findAll().

- Como retorno o filmesService será chamado utilizando o método findAll().

  ```javascript
   @Get()
    findAll() {
      return this.generosService.findAll();
    }
  ```

- O decorator @Get é utilizado para criar um requisição de chamada por id dos generos cadastrados, utilizando o método findOne.

- Como retorno o generosService será chamado utilizando o método findOne.

  ```javascript
  @Get(':id')
    findOne(@Param('id') id: string) {
      return this.generosService.findOne(+id);
    }
  ```

- O decorator @Patch é utilizado para criar um requisição de atualização dos generos ou do campo dos generos cadastrados, utilizando o método update.

- Como retorno o generosService será chamado utilizando o método update.

  ```javascript
  @Patch(':id')
    update(@Param('id') id: string, @Body() updateGeneroDto: UpdateGeneroDto){
      return this.generosService.update(+id, updateGeneroDto);
    }
  ```

- O decorator @Delete é utilizado para criar um requisição de deleção do genero pelo seu id, utilizando o método remove.

- Como retorno o generosService será chamado utilizando o método remove.

  ```javascript
  @Delete(':id')
    remove(@Param('id') id: string) {
      return this.generosService.remove(+id);
    }
  ```

------

### Participantes.controller.ts

- Importação do Decorator chamado Controller e das rotas utilizadas para requisições HTTP:

  ```javascript
  import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
  ```

- Importação da classe ParticipantesService para recuperar os dados armazenados:

  ```javascript
  import { ParticipantesService } from './participantes.service';
  ```

- Importação do CreateParticipanteDto e UpdateParticipanteDto utilizando plug-in Swagger:

  ```javascript
  import { CreateParticipanteDto } from './dto/create-participante.dto';
  ```

  ```javascript
  import { UpdateParticipanteDto } from './dto/update-participante.dto';
  ```

- É criado um decorator para a classe participantes, indicado ao decorator que todas as rotas começam com /participantes:

  ```javascript
  @Controller('participantes')
  ```

- Exportando a classe ParticipantesController juntamente com seus métodos:

  ```javascript
  export class ParticipantesController {
  ```

- É criado um constructor para inicializar a classe participantesService, invocando os campos internos da classe.

- É do tipo private, ou seja, um método de encapsulamento definindo o acesso apenas dentro da classe.

- É utilizado o readonly, tornando a propriedade somente de leitura.

  ```javascript
  constructor(private readonly participantesService: ParticipantesService) {}
  ```

- O decorator @Post é utilizado para criar um requisição de adição de um novo participante, utilizando o createParticipanteDto.

- Como retorno o participantesService será chamado utilizando o método create.

  ```javascript
  @Post()
    create(@Body() createParticipanteDto: CreateParticipanteDto) {
      return this.participantesService.create(createParticipanteDto);
    }
  ```

- O decorator @Get é utilizado para criar um requisição de chamada de todos os participantes cadastrados, utilizando o método findAll().

- Como retorno o participantesService será chamado utilizando o método findAll().

  ```javascript
   @Get()
    findAll() {
      return this.participantesService.findAll();
    }
  ```

- O decorator @Get é utilizado para criar um requisição de chamada por id dos participantes cadastrados, utilizando o método findOne.

- Como retorno o participantesService será chamado utilizando o método findOne.

  ```javascript
  @Get(':id')
    findOne(@Param('id') id: string) {
      return this.participantesService.findOne(+id);
    }
  ```

- O decorator @Patch é utilizado para criar um requisição de atualização dos participantes ou do campo dos participantes cadastrados, utilizando o método update.

- Como retorno o participantesService será chamado utilizando o método update.

  ```javascript
  @Patch(':id')
    update(@Param('id') id: string, @Body() updateParticipanteDto: UpdateParticipanteDto) {
      return this.participantesService.update(+id, updateParticipanteDto);
    }
  ```

- O decorator @Delete é utilizado para criar um requisição de deleção do participante pelo seu id, utilizando o método remove.

- Como retorno o participanteService será chamado utilizando o método remove.

  ```javascript
  @Delete(':id')
    remove(@Param('id') id: string) {
      return this.participantesService.remove(+id);
    }
  ```

------

### Schema.prisma

- Nesta etapa é criado a tabela no banco de dados pelo PostgreSQL usando o Prisma CLI, seguindo as definições de modelo.

  ```javascript
  datasource db {
    provider = "postgresql"
    url      = env("DATABASE_URL")
  }
  
  generator client {
    provider = "prisma-client-js"
  }
  ```

- Abaixo disso temos os modelos das tabelas com seus campos obrigatórios para cadastro, seguem-se os modelos de Filme, Gênero e Participante.

  ```javascript
  model Filme {
    id            Int       @default(autoincrement()) @id
    nome          String
    imagem        String?
    data_lancamento   String
    tempo_duracao     String
    genero        Genero @relation(fields: [generoid], references: [id]) 
    generoid      Int
    participantes     Participante[] 
  }
  
  model Genero {
    id            Int       @default(autoincrement()) @id
    nome          String
    filmes        Filme[]
  }
  
  model Participante {
    id            Int       @default(autoincrement()) @id
    nome          String
    imagem        String
    data_nascimento   String
    staff         String
    filmes        Filme[]
  }
  ```

- O **@default(autoincrement()) @id** significa que o campo id será gerado automaticamente conforme os cadastros.

- O **@relation(fields: [generoid], references: [id])** mostra o relacionamento das duas tabelas, filme e gênero, gerando um id de gênero para essa relação.

- Os campos precisam obrigatoriamente ser preenchidos com o tipo designado.

