import { Injectable } from '@angular/core';
import {LoginFormModel} from './sf-example1';
import {delay, of} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Login {

  login(loginFormModel: LoginFormModel){
    return of(true).pipe(delay(4000));
  }

}
