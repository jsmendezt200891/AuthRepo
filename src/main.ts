import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe);
 /* const connection : Connection = await createConnection({ 
    type: "mongodb", 
    url: "mongodb+srv://user_sebastian:44kmbT296lbZKb4N@cluster0.4l3ux.mongodb.net/test?retryWrites=true&w=majority",
    entities: [DataBaseEventDto]
  })*/
  await app.listen(3000); 
}
bootstrap();
