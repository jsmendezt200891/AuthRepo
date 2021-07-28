import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DataBaseEventDto } from './../dto/DataBaseEventDto';
import { Repository } from 'typeorm';

@Injectable()
export class dataBaseRepository {
  constructor(
    @InjectRepository(DataBaseEventDto)
    private readonly dataBaseRepository: Repository<DataBaseEventDto>,
  ) { }

  /*async findAll(): Promise<DataBaseEventDto[]> {
    return this.dataBaseRepository.find();
  }*/

  async save(input: DataBaseEventDto): Promise<DataBaseEventDto> {
    return this.dataBaseRepository.save(input);
  }

}