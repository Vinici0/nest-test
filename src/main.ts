import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v2');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Sirve cuadno se envian datos que no estan en el DTO
      forbidNonWhitelisted: true, //Sirve para que no se envien datos que no esten en el DTO
    }),
  );
  await app.listen(3000);
}
bootstrap();
