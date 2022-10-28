import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): { hello: string } {
    return { hello: this.appService.getHello() };
  }

  @Get('/lorem')
  getLorem(): { lorem: string } {
    return { lorem: this.appService.getLorem() };
  }

  @Get('/hello/:name')
  getName(@Param('name') name: string): { name: string } {
    return { name: `Hello, ${name}` };
  }
}
