import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Connection, createConnection } from 'typeorm';
import { AppModule } from './app.module';
import { DataBaseEventDto } from 'src/database/dto/DataBaseEventDto';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe);
 /*const connection : Connection = await createConnection({ 
    type: "mongodb", 
    url: "mongodb+srv://user_sebastian:44kmbT296lbZKb4N@cluster0.4l3ux.mongodb.net/test1?retryWrites=true&w=majority",
    entities: [DataBaseEventDto],
    synchronize: true,
  })*/
  await app.listen(3000); 
}
bootstrap();
