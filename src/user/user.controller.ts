import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { QueryUserDto, RegisterUserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('query')
  getUserInfo(@Query() params: QueryUserDto) {
    return this.userService.getUser(params);
  }

  @Get('queryAll')
  getAllUser() {
    return this.userService.getAllUser();
  }

  @Post('register')
  registerUser(@Body() userInfo: RegisterUserDto) {
    return this.userService.register(userInfo);
  }
}
