import { Expose } from "class-transformer";
import { IsNotEmpty, Length } from "class-validator";


export class AuthEventCreateDto {

    constructor(partial?: Partial<AuthEventCreateDto>){
        Object.assign(this,partial);
    }

    @IsNotEmpty({message:"The field user cannot be empty"})
    @Expose()
    user: string;

    @IsNotEmpty({message:"The field pass cannot be empty"})
    @Length(1, 255,{message:'The pass length is wrong'})
    @Expose()
    pass: string;
}

