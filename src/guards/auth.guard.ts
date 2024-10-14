import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { UserDTO } from 'src/dto/userDTO';

@Injectable() //מגדיר את המחלקה הבאה כמחלקה מוזרקת
export class UserGuard implements CanActivate {
  //ExecutionContext = מאפשר לך לקבל גישה לנתונים שעוברים בבקשה
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    //to get the request
    const request: Request<any, any, UserDTO> = context
      .switchToHttp()
      .getRequest();
    //you can to get evry from the request like =   request.body /   request.cookies ...
    const { name, password } = request.body;
    if (!name || !password) {
      //מוודא שהוכנס בגוף הבקשה תוכן בתצורת משתמש חדש (עם שם + סיסמא)
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'missing info (name or password)',
        },
        HttpStatus.BAD_REQUEST,
      );
    } else {
      console.log('הוכנס משתמש חדש בתצורה חדש');
      return true;
    }
  }
}
