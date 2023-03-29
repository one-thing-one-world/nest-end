import {
  Controller,
  Get,
  Request,
  Post,
  UseGuards,
  HttpCode,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // @UseGuards(AuthGuard('local'))
  // @Post('auth/login')
  // @HttpCode(200)
  // async login(@Request() req) {
  //   return this.authService.login(req.user);
  // }

  // @UseGuards(AuthGuard('jwt'))
  // @Get('profile')
  // @HttpCode(200)
  // getProfile(@Request() req) {
  //   return req.user;
  // }
}
