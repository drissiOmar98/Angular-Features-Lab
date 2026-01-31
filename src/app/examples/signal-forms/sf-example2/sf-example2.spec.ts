import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfExample2 } from './sf-example2';

describe('SfExample2', () => {
  let component: SfExample2;
  let fixture: ComponentFixture<SfExample2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SfExample2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SfExample2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
