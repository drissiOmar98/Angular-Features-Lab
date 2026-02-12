import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateExample2 } from './ng-template-example2';

describe('NgTemplateExample2', () => {
  let component: NgTemplateExample2;
  let fixture: ComponentFixture<NgTemplateExample2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgTemplateExample2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTemplateExample2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
