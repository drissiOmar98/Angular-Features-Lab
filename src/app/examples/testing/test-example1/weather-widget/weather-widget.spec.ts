import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherWidget } from './weather-widget';
import { By } from '@angular/platform-browser';
import { WeatherData } from '../types';
import { MatSelect } from '@angular/material/select';
import { beforeEach, expect, it, describe } from "vitest";

describe.only('WeatherWidget', () => {
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

        expect(locationEl.nativeElement.textContent).toContain(widgetTestingData?.location);
        expect(skyEl.nativeElement.textContent).toContain(widgetTestingData?.sky);
        expect(temperatureEl.nativeElement.textContent).toContain(`${widgetTestingData?.temperature}`);
    });

    it(`should show "no-location" placeholder if no location provided`, async () => {
        widgetTestingData.location = undefined;
        fixture.componentRef.setInput('data', widgetTestingData);
        await fixture.whenStable();
        const noLocationEl = fixture.debugElement.query(By.css('[data-testId="no-location"]'));
        expect(noLocationEl).toBeTruthy();
    });


    /**
     * ⚠️ Legacy test – Native <select> based implementation
     *
     * This test was valid when the WeatherWidget used a native HTML <select>.
     * It relies on:
     *  - Setting `nativeElement.value`
     *  - Dispatching a DOM `change` event
     *
     * After migrating to Angular Material's `mat-select`, this approach no longer works because:
     *  - `mat-select` does NOT emit DOM `change` events
     *  - It emits a typed Angular event: `selectionChange`
     *  - The value is provided via `$event.value`, not `event.target.value`
     *
     * Keeping this test commented serves as documentation of a common
     * testing pitfall when migrating from native form controls to
     * Angular Material components.
     *
     * ✅ Correct approach: interact with `MatSelect` or use
     * `MatSelectHarness` and trigger `selectionChange`.
     */
    /* it(`should emit (timeSpanChange) when time span changes`, async () => {
       await fixture.whenStable();
       let expectedOutput: string | undefined;
       component.timeSpanChange.subscribe((period) => {
         expectedOutput = period;
       })
       const selectEl = fixture.debugElement.query(
         By.css('[data-testId="time-span"]')
       );
       selectEl.nativeElement.value = 'tomorrow';
       selectEl.nativeElement.dispatchEvent(new Event('change'));
       expect(expectedOutput).toBe('tomorrow');
     });*/

    it(`should emit (timeSpanChange) when time span changes`, async () => {
        let expectedOutput: string | undefined;

        component.timeSpanChange.subscribe(period => {
            expectedOutput = period;
        });

        const matSelectDebugEl = fixture.debugElement.query(By.directive(MatSelect));

        const matSelect = matSelectDebugEl.componentInstance as MatSelect;

        matSelect.value = 'tomorrow';
        matSelect.selectionChange.emit({ value: 'tomorrow' } as any);

        expect(expectedOutput).toBe('tomorrow');
    });


});
