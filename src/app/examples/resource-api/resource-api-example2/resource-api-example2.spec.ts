import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceApiExample2 } from './resource-api-example2';

describe('ResourceApiExample2', () => {
  let component: ResourceApiExample2;
  let fixture: ComponentFixture<ResourceApiExample2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceApiExample2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceApiExample2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
