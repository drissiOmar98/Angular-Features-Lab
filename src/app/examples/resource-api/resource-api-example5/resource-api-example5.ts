import {Component, resource, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatFormField, MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}
export const API_URL = `https://jsonplaceholder.typicode.com/users`;

@Component({
  selector: 'app-resource-api-example5',
  imports: [
    RouterLink,
    MatButton,
    MatTabGroup,
    MatTab,
    MatCard,
    MatCardContent,
    MatIcon,
    MatCardTitle,
    MatCardSubtitle,
    MatCardHeader,
    MatFormField,
    MatLabel,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './resource-api-example5.html',
  styleUrl: './resource-api-example5.scss',
})
export class ResourceApiExample5 {

  query = signal('');
  users = resource<User[], { query: string }>({

    params: () => ({query: this.query()}),
    loader: async ({params, abortSignal}) => {
      const users = await fetch(`${API_URL}?name_like=^${params.query}`, {
        signal: abortSignal
      });
      if (!users.ok) throw Error(`Could not fetch...`)

      return await users.json();
    }
  });




   addUser() {
    const user: User = {
      id: 123,
      name: 'Jhon Doe',
      email: 'john.doe@example.com',
      username: 'John',
    };
    this.users.update(users => users ? [user, ...users] : [user]);
  }

  protected readonly encodeURIComponent = encodeURIComponent;
}
