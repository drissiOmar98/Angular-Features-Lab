import {Component, signal, WritableSignal} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {RouterLink} from '@angular/router';

import {TESTING_EXAMPLES} from './example-data/testing-examples';
import {ExampleModel} from '../../shared/models/example.model';

@Component({
  selector: 'app-testing',
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    RouterLink
  ],
  templateUrl: './testing.html',
  styleUrl: './testing.scss',
})
export class Testing {

    testingExamples: WritableSignal<ExampleModel[]> = signal(TESTING_EXAMPLES);

}
