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

  it(`should render weather data if provided`, async () => {
    fixture.componentRef.setInput('data', widgetTestingData);
    await fixture.whenStable();
    const locationEl = fixture.debugElement.query(By.css('.location'));
    const skyEl = fixture.debugElement.query(By.css('.sky-condition'));
    const temperatureEl = fixture.debugElement.query(By.css('.temperature'));

    expect(locationEl.nativeElement.textContent).toContain(
      widgetTestingData?.location
    );
    expect(skyEl.nativeElement.textContent).toContain(widgetTestingData?.sky);
    expect(temperatureEl.nativeElement.textContent).toContain(
      `${widgetTestingData?.temperature}`
    );
  });



});
