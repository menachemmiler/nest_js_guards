import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserGuard } from './guards/auth.guard';

@Controller('/users')
export class UsersController {
  @Get()
  @UseGuards(UserGuard)
  getUser() {
    return { username: 'anson' };
  }

  @Get('test')
  getUsersTest() {
    return { test: 'Test!' };
  }
}
