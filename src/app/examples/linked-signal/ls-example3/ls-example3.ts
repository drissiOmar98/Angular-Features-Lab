import {Component, linkedSignal, signal} from '@angular/core';
import {MatFormField,MatLabel} from '@angular/material/form-field';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {MatInput} from '@angular/material/input';

@Component({
  selector: 'app-ls-example3',
  imports: [
    MatFormField,
    MatCardContent,
    MatCard,
    MatTab,
    MatButton,
    RouterLink,
    MatTabGroup,
    MatInput,
    MatLabel
  ],
  templateUrl: './ls-example3.html',
  styleUrl: './ls-example3.scss',
})
export class LsExample3 {

  // Unit Converter: Celsius <-> Fahrenheit using linkedSignal
  celsius = signal(0);

  fahrenheit = linkedSignal({
    source: () => this.celsius(),
    computation: (c) => Math.round((c * 9 / 5 + 32) * 100) / 100
  });

  setCelsius(val: string) {
    this.celsius.set(Number(val));
  }

  setFahrenheit(val: string) {
    // To update celsius from fahrenheit, set celsius directly
    this.celsius.set(Math.round(((Number(val) - 32) * 5 / 9) * 100) / 100);
  }

  // Helper for template: convert fahrenheit to celsius
  get fahrenheitToCelsius(): number {
    return Math.round(((this.fahrenheit() - 32) * 5 / 9) * 100) / 100;
  }

}
