import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/module/AuthModule';
import { DataBaseEventDto } from './database/dto/DataBaseEventDto';
import { DataBaseModule } from './database/module/dataBaseModule';
import { UserModule } from './user/module/UserModule';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: "mongodb",
        url: "mongodb+srv://user_sebastian:44kmbT296lbZKb4N@cluster0.4l3ux.mongodb.net/test?retryWrites=true&w=majority",
        entities: [DataBaseEventDto],
        synchronize: true,
    }),
    DataBaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
