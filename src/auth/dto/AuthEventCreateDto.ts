import { IsNotEmpty, Length } from "class-validator";


export class AuthEventCreateDto {
    @IsNotEmpty({message:"The field user cannot be empty"})
    user: string;

    @IsNotEmpty({message:"The field pass cannot be empty"})
    @Length(1, 255,{message:'The pass length is wrong'})
    pass: string;
}

