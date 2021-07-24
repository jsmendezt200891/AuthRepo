import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/module/AuthModule';


@Module({
  imports: [
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
