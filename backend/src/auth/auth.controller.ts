import { Controller, Post, Body, UseGuards , Req} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: any) {
    const user = await this.authService.validateUser(body.username, body.password);
    if (!user) {
      return { message: 'Invalid credentials' };
    }
    return this.authService.login(user);
  }
  @UseGuards(JwtAuthGuard)
  @Post('protected-route')
  getProtectedData(@Req() req) {
    return { message: 'This is a protected route', user: req.user };
  }
}