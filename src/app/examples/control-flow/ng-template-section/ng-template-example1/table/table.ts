import {Component, ContentChild, Input, TemplateRef} from '@angular/core';
import {KeyValuePipe, NgTemplateOutlet} from '@angular/common';
import {MatCard} from '@angular/material/card';


@Component({
  selector: 'app-table',
  imports: [
    KeyValuePipe,
    NgTemplateOutlet,
    MatCard
  ],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table {
  @Input() data!: any[];
  @ContentChild('headers') headers: TemplateRef<any> | undefined;
  @ContentChild('rows') rows: TemplateRef<any> | undefined;


}
