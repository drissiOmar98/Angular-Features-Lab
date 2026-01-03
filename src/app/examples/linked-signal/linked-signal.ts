import {Component, signal, WritableSignal} from '@angular/core';
import {ExampleModel} from '../../shared/models/example.model';
import {LINKED_SIGNAL_EXAMPLES} from './example-data/linked-signal-examples';
import {RouterLink} from '@angular/router';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';

@Component({
  selector: 'app-linked-signal',
  imports: [
    RouterLink,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle
  ],
  templateUrl: './linked-signal.html',
  styleUrl: './linked-signal.scss',
})
export class LinkedSignal {
  linkedSignalExamples: WritableSignal<ExampleModel[]> = signal(LINKED_SIGNAL_EXAMPLES);

}
