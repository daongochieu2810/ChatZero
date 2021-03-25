import { Body, Controller, Get, Post } from '@nestjs/common';
import { User, UserDto } from './user.schema';
import UsersService from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
  @Post()
  async create(@Body() user: UserDto): Promise<UserDto> {
    return await this.usersService.create(user);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
