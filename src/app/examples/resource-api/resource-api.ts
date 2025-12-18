import {Component, signal, WritableSignal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {ExampleModel} from '../../shared/models/example.model';
import {RESOURCE_EXAMPLES} from './example-data/resource-examples';
import {HTTP_RESOURCE_EXAMPLES} from './example-data/http-resource-examples';
import {RX_RESOURCE_EXAMPLES} from './example-data/rx-resource-examples';

@Component({
  selector: 'app-resource-api',
  imports: [
    RouterLink,
    MatCardModule
  ],
  templateUrl: './resource-api.html',
  styleUrl: './resource-api.scss',
})
export class ResourceApi {


  resourceExamples: WritableSignal<ExampleModel[]> = signal(RESOURCE_EXAMPLES);

  rxResourceExamples: WritableSignal<ExampleModel[]> = signal(RX_RESOURCE_EXAMPLES);

  httpResoureExamples: WritableSignal<ExampleModel[]> = signal(HTTP_RESOURCE_EXAMPLES);

}
