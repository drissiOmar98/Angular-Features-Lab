import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfExample3 } from './sf-example3';

describe('SfExample3', () => {
  let component: SfExample3;
  let fixture: ComponentFixture<SfExample3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SfExample3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SfExample3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
