import { Module } from '@nestjs/common';
import { UserController } from '../controller/UserController';
import { dataBaseRepository } from './../../database/repository/dataBaseRepository';
import { DataBaseEventDto } from 'src/database/dto/DataBaseEventDto';
import { TypeOrmModule } from '@nestjs/typeorm';



@Module({
  imports: [TypeOrmModule.forFeature([DataBaseEventDto])],
  
controllers: [UserController],
  providers: [dataBaseRepository],
})
export class UserModule { }
