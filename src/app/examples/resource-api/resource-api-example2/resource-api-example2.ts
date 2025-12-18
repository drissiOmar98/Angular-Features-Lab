import {Component, resource, signal} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatCard, MatCardContent, MatCardModule} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-resource-api-example2',
  imports: [
    MatButton,
    MatCard,
    MatCardContent,
    MatIcon,
    MatTab,
    MatTabGroup,
    RouterLink,
    MatCardModule,
  ],
  templateUrl: './resource-api-example2.html',
  styleUrl: './resource-api-example2.scss',
})
export class ResourceApiExample2 {
  userId = signal(0);

  // Basic resource example
  userResource = resource({
    params: () => this.userId(),
    loader: async ({params}: { params: number }) => {
      if (params === 0) {
        return null;
      }
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Simulate user data
      const users: Record<number, any> = {
        1: {id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin'},
        2: {id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User'},
        3: {id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor'}
      };

      if (!users[params]) {
        throw new Error(`User ${params} not found`);
      }

      return users[params];
    }
  });

  codeExample = `userId = signal(0);

userResource = resource({
  params: () => this.userId(),
  loader: async ({ request }) => {
    if (request === 0) return null;
    await new Promise(resolve => setTimeout(resolve, 1000));

    const users = {
      1: { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
      2: { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
      3: { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' }
    };

    return users[request];
  }
});`;
}
