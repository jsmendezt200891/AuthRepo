import { Body, Controller, Post } from "@nestjs/common";


@Controller('user')
export class UserController {
    constructor(

    ) { }

    @Post('create')
    async CreateUser(@Body() input) {
        return await {...input};

    }

}