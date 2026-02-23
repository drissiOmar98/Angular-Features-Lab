import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfExample5 } from './sf-example5';

describe('SfExample5', () => {
  let component: SfExample5;
  let fixture: ComponentFixture<SfExample5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SfExample5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SfExample5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
