import {Component, resource, signal} from '@angular/core';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {MatButton} from '@angular/material/button';



interface ResourceData {
    id: number;
    title: string;
    completed: boolean;
}
function fetchResourceApi(limit = 10): Promise<ResourceData[] | null> {
  return fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
    .then(response => response.json())
    .catch(() => []);
}
@Component({
  selector: 'app-resource-api-example1',
  imports: [
    MatTab,
    MatCardModule,
    MatIcon,
    MatTabGroup,
    RouterLink,
    MatButton,

  ],
  templateUrl: './resource-api-example1.html',
  styleUrl: './resource-api-example1.scss',
})
export class ResourceApiExample1 {
   limit = signal(10);
    resourceSignal = resource({
        params: () => this.limit(),
        loader: () => fetchResourceApi(this.limit()),
        defaultValue: []
    });

}
