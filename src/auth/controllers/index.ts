import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "../service";
import { CreateEventDto } from './../dto/';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) { }

    @Post('login')
    async GenerateToken(@Body() input: CreateEventDto) {
        return await{
            user:input.user,
            token: this.authService.getTokenorUser(input.user,input.pass)

        }

    }

}