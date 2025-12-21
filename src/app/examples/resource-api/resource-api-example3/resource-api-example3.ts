import {Component, computed, signal} from '@angular/core';
import {httpResource} from '@angular/common/http';
import {MatButton} from '@angular/material/button';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {RouterLink} from '@angular/router';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

@Component({
  selector: 'app-resource-api-example3',
  imports: [
    MatButton,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatIcon,
    MatTab,
    MatTabGroup,
    RouterLink
  ],
  templateUrl: './resource-api-example3.html',
  styleUrl: './resource-api-example3.scss',
})
export class ResourceApiExample3 {

  postId = signal(0);

  // Computed URL based on postId
  postUrl = computed(() => {
    const id = this.postId();
    return id > 0 ? `https://jsonplaceholder.typicode.com/posts/${id}` : undefined;
  });

  // httpResource example - takes a URL signal
  postResource = httpResource<Post>(() => this.postUrl());

  codeExample = `postId = signal(0);

postUrl = computed(() => {
  const id = this.postId();
  return id > 0
    ? \`https://jsonplaceholder.typicode.com/posts/\${id}\`
    : undefined;
});

postResource = httpResource<Post>(() => this.postUrl());`;

}
