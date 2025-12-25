import { Component } from '@angular/core';
import {httpResource} from '@angular/common/http';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {RouterLink} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-resource-api-example10',
  imports: [
    MatTab,
    RouterLink,
    MatButton,
    MatTabGroup,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatIcon,
    MatCardTitle
  ],
  templateUrl: './resource-api-example10.html',
  styleUrl: './resource-api-example10.scss',
})
export class ResourceApiExample10 {
   jokeSignal = httpResource(() => "https://api.chucknorris.io/jokes/random");

}
