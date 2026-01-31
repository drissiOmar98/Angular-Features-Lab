import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfExample1 } from './sf-example1';

describe('SfExample1', () => {
  let component: SfExample1;
  let fixture: ComponentFixture<SfExample1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SfExample1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SfExample1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
