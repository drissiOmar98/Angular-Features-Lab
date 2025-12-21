import {Component, resource, signal} from '@angular/core';
import {MatFormField, MatOption, MatSelect, MatSelectChange} from '@angular/material/select';
import {RouterLink} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatLabel} from '@angular/material/form-field';

interface WeatherData {
  temp: number;
  humidity: number;
  condition: string;
}

@Component({
  selector: 'app-resource-api-example7',
  imports: [
    RouterLink,
    MatButton,
    MatTabGroup,
    MatTab,
    MatFormField,
    MatSelect,
    MatOption,
    MatCard,
    MatCardContent,
    MatLabel
  ],
  templateUrl: './resource-api-example7.html',
  styleUrl: './resource-api-example7.scss',
})
export class ResourceApiExample7 {

   cities = signal(['London', 'New York', 'Tunisia', 'Sydney']);
  city = signal('London');

  weatherResource = resource({
    params: () => this.city(),
    loader: async (params) => {
      const city = params.params;
      // Fetch real weather data from wttr.in free API
      const url = `https://wttr.in/${encodeURIComponent(city)}?format=j1`;
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch weather');
      const json = await response.json();
      // Extract current condition
      const current = json.current_condition?.[0];
      if (!current) throw new Error('No weather data');
      return {
        temp: Number(current.temp_C),
        humidity: Number(current.humidity),
        condition: current.weatherDesc?.[0]?.value || 'Unknown'
      };
    }
  });

  updateCity(event: MatSelectChange<any>) {
    this.city.set(event.value);
  }

}
