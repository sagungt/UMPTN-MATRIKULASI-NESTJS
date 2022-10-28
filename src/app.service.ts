import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getLorem(): string {
    return 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ipsa, corporis reprehenderit vitae tempora quia doloribus facere harum commodi perferendis illum sit libero recusandae dolore quasi totam accusantium, quisquam aspernatur!';
  }
}
