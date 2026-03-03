import { Component } from '@angular/core';
import {AsyncPipe, CurrencyPipe, NgTemplateOutlet} from '@angular/common';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {MatDivider} from '@angular/material/divider';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {MatButton, MatIconButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {Observable, of} from 'rxjs';
import {MatToolbar} from '@angular/material/toolbar';
import {Table} from './table/table';
import {MatChip} from '@angular/material/chips';

interface User {
  uid: string;
  displayName: string;
  photoURL?: string;
}
@Component({
  selector: 'app-ng-template-example1',
  imports: [
    NgTemplateOutlet,
    MatCardContent,
    MatCard,
    MatDivider,
    MatMenu,
    MatButton,
    AsyncPipe,
    MatMenuTrigger,
    MatMenuItem,
    RouterLink,
    MatIcon,
    MatToolbar,
    Table,
    CurrencyPipe,
    MatCardTitle,
    MatCardSubtitle,
    MatCardHeader,
    MatIconButton,
    MatChip
  ],
  templateUrl: './ng-template-example1.html',
  styleUrl: './ng-template-example1.scss',
})
export class NgTemplateExample1 {
  // Simulated auth state (replace with Firebase authState$)
  user$: Observable<User | null> = of({
    uid: '123',
    displayName: 'Ariana',
    photoURL: 'assets/images/avatar.png',
  });

  // Example logout method
  logout(): void {
    console.log('User logged out');
    // Firebase example:
    // this.auth.signOut();
  }



  employees = [
    { firstName: 'Employee', lastName: 'One' },
    { firstName: 'Employee', lastName: 'Two' },
    { firstName: 'Employee', lastName: 'Three' },
    { firstName: 'Employee', lastName: 'Four' },
    { firstName: 'Employee', lastName: 'Five' },
  ];

  inventory = [
    {
      plu: 110,
      supplier: 'X Corp',
      name: 'Table extender',
      inStock: 500,
      price: 50,
      currency: 'GBP',
    },
    {
      plu: 120,
      supplier: 'X Corp',
      name: 'Heated toilet seat',
      inStock: 0,
      price: 80,
      currency: 'GBP',
    },
    {
      plu: 155,
      supplier: 'Y Corp',
      name: 'Really good pencil',
      inStock: 1,
      price: 8000,
      currency: 'AUD',
    },
  ];

  purchaseItem(plu: number) {
    console.log('handle purchase for', plu);
  }

}
