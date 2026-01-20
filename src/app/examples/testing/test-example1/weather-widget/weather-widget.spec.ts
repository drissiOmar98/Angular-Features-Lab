import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherWidget } from './weather-widget';
import {By} from '@angular/platform-browser';
import {WeatherData} from '../types';
import {MatSelect} from '@angular/material/select';

describe('WeatherWidget', () => {
  let component: WeatherWidget;
  let fixture: ComponentFixture<WeatherWidget>;
  let widgetTestingData: WeatherData;

  beforeEach(async () => {
    fixture = TestBed.createComponent(WeatherWidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
    widgetTestingData = {
      location: `Test Country`,
      sky: `🌧️`,
      temperature: 20,
    };
  });





});
