import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

// Defenses for routes where clients use traditional login credentials
// VS Local Authentication System like a db

@Injectable()
export class LocalGuard extends AuthGuard('local') {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
      return super.canActivate(context);
  }
}