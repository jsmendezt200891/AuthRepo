import { Expose } from "class-transformer";
import { IsNotEmpty, Length } from "class-validator";


export class AuthEventValidateDto {
    constructor(partial?: Partial<AuthEventValidateDto>) {
        Object.assign(this, partial);
    }
    @IsNotEmpty({ message: "The field user cannot be empty" })
    @Expose()
    user: string;

    @IsNotEmpty({ message: "The field Authorization cannot be empty" })
    @Length(1, 255, { message: 'The Authorization length is wrong' })
    @Expose()
    Authorization: string;
}

