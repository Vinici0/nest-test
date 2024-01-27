import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [
    //Sirve para servir archivos estaticos
    ServeStaticModule.forRoot({
      rootPath: __dirname + '/../public',
    }),

    MongooseModule.forRoot('mongodb://172.31.7.122:27017/nest-pokemon'),
    PokemonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
