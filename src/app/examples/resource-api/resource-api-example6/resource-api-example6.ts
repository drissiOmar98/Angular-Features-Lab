import {Component, resource} from '@angular/core';
import {
  MatCard,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {RouterLink} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {MatIcon} from '@angular/material/icon';

function fetchRandomUser(): Promise<any> {
  // Get a random user ID between 1 and 100000 (GitHub user IDs)
  const randomId = Math.floor(Math.random() * 100000) + 1;
  return fetch(`https://api.github.com/user/${randomId}`)
    .then(res => res.json())
    .then((user: any) => {
      // If user doesn't exist, try another random one
      if (user.message === 'Not Found') {
        return fetchRandomUser();
      }
      return user;
    })
    .catch(() => null);
}
@Component({
  selector: 'app-resource-api-example6',
  imports: [
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    RouterLink,
    MatButton,
    MatTabGroup,
    MatTab,
    MatCard,
    MatCardHeader,
    MatIcon,
    MatCardAvatar
  ],
  templateUrl: './resource-api-example6.html',
  styleUrl: './resource-api-example6.scss',
})
export class ResourceApiExample6 {
  userSignal = resource({ loader: fetchRandomUser, defaultValue: null });

  copyUsername(username: string | undefined) {
    if (username) {
      navigator.clipboard.writeText(username).then(() => {
        // You could add a toast notification here if needed
        console.log('Username copied to clipboard:', username);
      }).catch(err => {
        console.error('Failed to copy username:', err);
      });
    }
  }

}
