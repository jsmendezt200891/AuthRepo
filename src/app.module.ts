import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/module/AuthModule';
import { UserModule } from './user/module/UserModule';

@Module({
  imports: [
  AuthModule,
  UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
