import { Injectable } from '@nestjs/common';
import UsersService from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async validateUser(username: string, pass: string): Promise<boolean> {
    const user = await this.userService.findOne(username);
    if (user && user.password === pass) {
      return true;
    }
    return false;
  }
}
