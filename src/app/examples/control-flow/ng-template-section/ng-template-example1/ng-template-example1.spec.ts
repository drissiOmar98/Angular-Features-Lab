import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateExample1 } from './ng-template-example1';

describe('NgTemplateExample1', () => {
  let component: NgTemplateExample1;
  let fixture: ComponentFixture<NgTemplateExample1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgTemplateExample1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTemplateExample1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
