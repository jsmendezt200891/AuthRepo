import { Module } from '@nestjs/common';
import { AuthController } from '../controllers/AuthController';
import { AuthService } from '../service/AuthService';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
  JwtModule.registerAsync({
    useFactory: () => ({
      secret:"Secret123",
      signOptions:{
        expiresIn:'60s'
      }
    })
  })
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule { }
