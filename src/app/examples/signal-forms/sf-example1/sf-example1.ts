import {Component, signal} from '@angular/core';
import {MatError, MatLabel, MatSuffix} from '@angular/material/form-field';
import {MatFormField, MatInput} from '@angular/material/input';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {email, Field, form, required} from '@angular/forms/signals';
import {JsonPipe} from '@angular/common';
import {RouterLink} from '@angular/router';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {MatIcon} from '@angular/material/icon';


export interface LoginFormModel{
  email: string;
  password: string;
}
@Component({
  selector: 'app-sf-example1',
  imports: [
    MatLabel,
    MatInput,
    MatFormField,
    MatCard,
    MatButton,
    Field,
    JsonPipe,
    RouterLink,
    MatCardContent,
    MatTabGroup,
    MatTab,
    MatCardTitle,
    MatCardHeader,
    MatIcon,
    MatSuffix,
    MatError
  ],
  templateUrl: './sf-example1.html',
  styleUrl: './sf-example1.scss',
})
export class SfExample1 {
  loginModel = signal<LoginFormModel>({
    email: '',
    password: ''
  });

  loginForm = form<LoginFormModel>(this.loginModel, (rootPath) => {
    required(rootPath.email,{
      message: 'Email is required.',
    });
    email(rootPath.email,{
      message: 'Please enter a valid email address.'
    });
    required(rootPath.password, {
      message: 'Please enter a valid password'
    });
  });
}
