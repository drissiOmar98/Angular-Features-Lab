import { Component } from '@angular/core';
import {NgTemplateOutlet} from '@angular/common';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {MatCard, MatCardContent} from '@angular/material/card';

@Component({
  selector: 'app-ng-template-example2',
  imports: [
    NgTemplateOutlet,
    MatTab,
    MatButton,
    RouterLink,
    MatTabGroup,
    MatCard,
    MatCardContent,
  ],
  templateUrl: './ng-template-example2.html',
  styleUrl: './ng-template-example2.scss',
})
export class NgTemplateExample2 {

  signIn() {

  }

  shop() {

  }

  signUp() {

  }
}
