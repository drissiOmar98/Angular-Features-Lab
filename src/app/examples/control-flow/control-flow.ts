import {Component, signal, WritableSignal, ChangeDetectionStrategy} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {RouterLink} from '@angular/router';
import {ExampleModel} from '../../shared/models/example.model';
import {CONTROL_FLOW_EXAMPLES} from './example-data/control-flow-examples';

@Component({
  selector: 'app-control-flow',
  imports: [
    MatCardContent,
    MatCardTitle,
    RouterLink,
    MatCardHeader,
    MatCard
  ],
  templateUrl: './control-flow.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './control-flow.scss',
})
export class ControlFlow {

   controlFlowExamples: WritableSignal<ExampleModel[]> = signal(CONTROL_FLOW_EXAMPLES);

}
