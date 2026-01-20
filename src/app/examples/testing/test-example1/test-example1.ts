import {Component, signal} from '@angular/core';
import {WeatherWidget} from './weather-widget/weather-widget';
import {TimeSpan, WeatherData} from './types';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-test-example1',
  imports: [
    WeatherWidget,
    MatCardContent,
    MatTab,
    MatTabGroup,
    MatCard,
    MatButton,
    RouterLink
  ],
  templateUrl: './test-example1.html',
  styleUrl: './test-example1.scss',
})
export class TestExample1 {

   widgetData = signal<WeatherData | undefined>({
    temperature: 22,
    sky: '⛅',
    location: 'Vienna',
  });

  updatedWidget(period: TimeSpan) {
    if (period === 'today') {
      this.widgetData.update(
        (data) => data && { ...data, sky: '⛅', temperature: 25 }
      );
      return;
    }
    this.widgetData.update(
      (data) => data && { ...data, sky: '🌧️', temperature: 22 }
    );
  }

}
