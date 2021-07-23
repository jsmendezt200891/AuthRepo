import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthEventCreateDto } from "../dto/AuthEventCreateDto";
import { AuthEventValidateDto } from "../dto/AuthEventValidateDto";

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
      ) { }

    public getTokenorUser(input : AuthEventCreateDto){
        const date = new Date(Date.now()).toLocaleString();
        return this.jwtService.sign({
            username:input.user+input.pass+date
        })
    }

    public validateTokenUSer(input : AuthEventValidateDto){
        try {
            const acces = this.jwtService.verify(input.Authorization);
            return 0;
            
        } catch (error) {
           return 1;
        }
       
    }
}
