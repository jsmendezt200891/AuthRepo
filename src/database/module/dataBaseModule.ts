import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataController } from '../controllers';
import { DataBaseEventDto } from '../dto/DataBaseEventDto';
import { dataBaseRepository } from '../repository/dataBaseRepository';



@Module({
  imports: [TypeOrmModule.forFeature([DataBaseEventDto])],
  controllers: [DataController],
  providers: [dataBaseRepository],
})
export class DataBaseModule { }
