import { Body, Controller, Get, Post } from "@nestjs/common";
import { DataBaseEventDto } from "src/database/dto/DataBaseEventDto";
import { dataBaseRepository } from "src/database/repository/dataBaseRepository";



@Controller('user')
export class UserController {
    constructor(
        private readonly dataService: dataBaseRepository
    ) { }

    @Post('create')
    async CreateUser(@Body() input: DataBaseEventDto) {
        return  this.dataService.save(input);

    }

    @Get('test')
    Test(){
        console.log(process.env.AUTH_SECRET);
    }    

}