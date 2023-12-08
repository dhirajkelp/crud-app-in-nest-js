import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class UsersMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    if (req.header('myheader') == 1234) {
      res.status(403).json('authentication faild');
    } else {
      next();
    }
  }
}
