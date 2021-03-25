import { Injectable } from '@nestjs/common';
import UsersService from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<boolean> {
    const user = await this.userService.findOne(username);
    if (user && user.password === pass) {
      return true;
    }
    return false;
  }

  async login(user: User) {
    const payload = {
      username: user.name,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
