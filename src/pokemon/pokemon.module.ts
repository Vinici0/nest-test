import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonSchema } from './entities/pokemon.entity';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Pokemon', //Nombre de la coleccion
        schema: PokemonSchema, //Esquema de la coleccion
      },
    ]),
  ],
})
export class PokemonModule {}
