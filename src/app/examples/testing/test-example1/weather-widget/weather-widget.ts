import {Component, input, output} from '@angular/core';
import {TimeSpan, WeatherData} from '../types';
import {MatFormField, MatLabel, MatOption, MatSelect} from '@angular/material/select';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-weather-widget',
  imports: [
    MatOption,
    MatSelect,
    MatLabel,
    MatFormField,
    MatCardContent,
    MatIcon,
    MatCardTitle,
    MatCard,
    MatCardHeader
  ],
  templateUrl: './weather-widget.html',
  styleUrl: './weather-widget.scss',
})
export class WeatherWidget {

  data = input<WeatherData>();

  timeSpanChange = output<TimeSpan>();

  onTimeSpanChanges(value: TimeSpan) {
    this.timeSpanChange.emit(value);
  }


}
