import {Component, signal} from '@angular/core';
import { MatOption } from '@angular/material/core';
import {MatError, MatFormField, MatLabel, MatSuffix} from '@angular/material/form-field';
import {MatSelect} from '@angular/material/select';
import {MatInput} from '@angular/material/input';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {Field, form} from '@angular/forms/signals';
import {registerFormSchema} from './register.schema';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {JsonPipe} from '@angular/common';
import {MatTab, MatTabGroup} from '@angular/material/tabs';

export interface RegisterFormModel {
  email: string;
  password: string;
  confirmPassword: string;
  country: string;
  state: string;
}
@Component({
  selector: 'app-sf-example2',
  imports: [
    MatOption,
    MatFormField,
    MatSelect,
    MatInput,
    MatCard,
    MatButton,
    Field,
    MatError,
    MatLabel,
    MatIcon,
    MatSuffix,
    RouterLink,
    MatCardContent,
    MatTab,
    MatTabGroup
  ],
  templateUrl: './sf-example2.html',
  styleUrl: './sf-example2.scss',
})
export class SfExample2 {
  formModel = signal<RegisterFormModel>({
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    state: '',
  });

  registrationForm = form<RegisterFormModel>(this.formModel,registerFormSchema);

}
