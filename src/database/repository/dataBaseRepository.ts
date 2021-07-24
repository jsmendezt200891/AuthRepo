//findOne, save, find

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DataBaseEventDto } from './../dto/DataBaseEventDto';
import { Repository } from 'typeorm';

@Injectable()
export class dataBaseRepository {
  constructor(
    @InjectRepository(DataBaseEventDto)
    private readonly photoRepository: Repository<DataBaseEventDto>,
  ) {}

  async findAll(): Promise<DataBaseEventDto[]> {
    return this.photoRepository.find();
  }

}