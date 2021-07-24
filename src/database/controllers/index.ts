import { Body, Controller, Get, Post } from "@nestjs/common";
import { DataBaseEventDto } from "../dto/DataBaseEventDto";
import { dataBaseRepository } from "../repository/dataBaseRepository";


@Controller('data')
export class DataController {
    constructor(
        private readonly dataService : dataBaseRepository
    ) { }

    @Get()
    findAll(): Promise<DataBaseEventDto[]>{
        return  this.dataService.findAll();
    }

    

}