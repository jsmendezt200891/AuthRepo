import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/module/AuthModule';
import { DataBaseModule } from './database/module/dataBaseModule';
import { UserModule } from './user/module/UserModule';
import { ConfigModule } from '@nestjs/config';
import ormConfig from './config/orm.config';
import ormConfigProd from './config/orm.configProduction';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [ormConfig]
    }),
    TypeOrmModule.forRootAsync({
      useFactory:process.env.NODE_ENV !== 'production' 
      ? ormConfig : ormConfigProd
    }),
    AuthModule,
    DataBaseModule,
    UserModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
