import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import {
  QueryUserDto,
  RegisterUserDto,
  EditUserDto,
  loginUserDto,
  EditUserAvatorDto,
} from './user.dto';
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

  @Post('login')
  loginUser(@Body() userInfo: loginUserDto) {
    return this.userService.loginUser(userInfo);
  }

  @Post('editInfo')
  editUserInfo(@Body() userInfo: EditUserDto) {
    return this.userService.editUserInfo(userInfo);
  }

  @Post('editAvator')
  editUserAvator(@Body() userInfo: EditUserAvatorDto) {
    return this.userService.editUserAvator(userInfo);
  }
}
