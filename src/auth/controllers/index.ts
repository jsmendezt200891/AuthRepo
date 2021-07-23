import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "../service";
import { ValidationDto } from './../dto/validationDTO';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) { }

    @Post('login')
    async login(@Body() input: ValidationDto) {
        const date = new Date(Date.now()).toLocaleString();
        return {
            us: input.user,
            token: this.authService.getTokenorUser(input.user + input.pass + date)
        }

    }

}