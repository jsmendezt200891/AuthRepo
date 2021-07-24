import { dataBaseRepository } from "../repository/dataBaseRepository";


export class databaseService{
    constructor(

        private readonly databaseService: dataBaseRepository
    ){}

    public findAll(){
        return this.databaseService.findAll();
    }

}