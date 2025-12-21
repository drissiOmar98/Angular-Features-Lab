import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceApiExample3 } from './resource-api-example3';

describe('ResourceApiExample3', () => {
  let component: ResourceApiExample3;
  let fixture: ComponentFixture<ResourceApiExample3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceApiExample3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceApiExample3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
