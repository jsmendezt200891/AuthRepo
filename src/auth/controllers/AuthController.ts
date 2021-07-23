import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "../service/AuthService";
import { AuthEventCreateDto } from '../dto/AuthEventCreateDto';
import { AuthEventValidateDto } from "../dto/AuthEventValidateDto";

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) { }

    @Get('validate')
    async ValidateToken(@Body() input: AuthEventValidateDto) {

        let message=input.Authorization;
        
        const acces = this.authService.validateTokenUSer(input);
        console.log(acces);
        if (acces)  
            message ="Expired or incorrect token";

        return await {
                status: acces,
                message:message
            }

    }

    @Post('create')
    async GenerateToken(@Body() input: AuthEventCreateDto) {
        const token = this.authService.getTokenorUser(input);

        return await {
            status: 0,
            message: "Success",
            response: {
                user: input.user,
                token: token
            }


        }

    }

}