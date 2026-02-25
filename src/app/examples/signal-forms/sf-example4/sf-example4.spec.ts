import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfExample4 } from './sf-example4';

describe('SfExample4', () => {
  let component: SfExample4;
  let fixture: ComponentFixture<SfExample4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SfExample4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SfExample4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
