import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceApiExample8 } from './resource-api-example8';

describe('ResourceApiExample8', () => {
  let component: ResourceApiExample8;
  let fixture: ComponentFixture<ResourceApiExample8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceApiExample8]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceApiExample8);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
