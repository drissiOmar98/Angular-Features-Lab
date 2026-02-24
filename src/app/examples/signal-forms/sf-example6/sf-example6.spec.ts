import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfExample6 } from './sf-example6';

describe('SfExample6', () => {
  let component: SfExample6;
  let fixture: ComponentFixture<SfExample6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SfExample6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SfExample6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
