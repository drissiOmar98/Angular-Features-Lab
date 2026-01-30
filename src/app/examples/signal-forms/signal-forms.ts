import {Component, signal, WritableSignal} from '@angular/core';
import {ExampleModel} from '../../shared/models/example.model';
import {SIGNAL_FORM_EXAMPLES} from './example-data/signal-forms-examples';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {RouterLink} from '@angular/router';
import {MatCardTitle} from '@angular/material/card';

@Component({
  selector: 'app-signal-forms',
  imports: [
    MatCard,
    RouterLink,
    MatCardHeader,
    MatCardContent,
    MatCardTitle
  ],
  templateUrl: './signal-forms.html',
  styleUrl: './signal-forms.scss',
})
export class SignalForms {
   examples: WritableSignal<ExampleModel[]> = signal(SIGNAL_FORM_EXAMPLES);

}
