import { IsNotEmpty, Length } from "class-validator";


export class AuthEventValidateDto {
    @IsNotEmpty({message:"The field user cannot be empty"})
    user: string;

    @IsNotEmpty({message:"The field Authorization cannot be empty"})
    @Length(1, 255,{message:'The Authorization length is wrong'})
    Authorization: string;
}

