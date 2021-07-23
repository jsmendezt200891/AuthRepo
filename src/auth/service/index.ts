import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
      ) { }

    public getTokenorUser(name :string,pass:string){
        const date = new Date(Date.now()).toLocaleString();
        return this.jwtService.sign({
            username:name+pass+date
        })
    }
}
