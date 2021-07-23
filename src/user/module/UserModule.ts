import { Module } from '@nestjs/common';
import { UserController } from '../controller/UserController';
import { UserService } from '../service';


@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule { }
