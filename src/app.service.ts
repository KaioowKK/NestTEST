import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getErian(): string {
    return 'Hello QwarZ! The Almighty!';
  }
}
