import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsExample2 } from './ls-example2';

describe('LsExample2', () => {
  let component: LsExample2;
  let fixture: ComponentFixture<LsExample2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LsExample2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LsExample2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
