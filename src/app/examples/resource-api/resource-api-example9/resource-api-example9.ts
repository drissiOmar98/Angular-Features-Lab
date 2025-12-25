import {Component, signal} from '@angular/core';
import {httpResource} from '@angular/common/http';
import {RouterLink} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatFormField, MatLabel, MatOption, MatSelect} from '@angular/material/select';
import {MatIcon} from '@angular/material/icon';
import {DecimalPipe} from '@angular/common';

interface Country {
  name: { common: string };
  capital?: string[];
  region?: string;
  population?: number;
  flags?: { svg?: string };
}
@Component({
  selector: 'app-resource-api-example9',
  imports: [
    RouterLink,
    MatButton,
    MatTabGroup,
    MatTab,
    MatCard,
    MatSelect,
    MatOption,
    MatCardContent,
    MatLabel,
    MatFormField,
    MatCardHeader,
    MatIcon,
    DecimalPipe,
    MatCardTitle
  ],
  templateUrl: './resource-api-example9.html',
  styleUrl: './resource-api-example9.scss',
})
export class ResourceApiExample9 {

  get countryData(): Country | null {
    const val = this.countryResource.value();
    return Array.isArray(val) && val.length > 0 ? val[0] as Country : null;
  }
  countries = signal<string[]>([
    'Tunisia', 'United States', 'Brazil', 'France', 'Japan', 'Australia', 'Canada', 'Germany', 'South Africa', 'China'
  ]);
  country = signal('Tunisia');

  countryResource = httpResource(() =>
    `https://restcountries.com/v3.1/name/${this.country()}?fullText=true`
  );

  // No HttpClient needed for httpResource URL mode

  updateCountry(event: any) {
    this.country.set(event.value);
  }

}
