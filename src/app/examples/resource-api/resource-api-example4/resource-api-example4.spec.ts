import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceApiExample4 } from './resource-api-example4';

describe('ResourceApiExample4', () => {
  let component: ResourceApiExample4;
  let fixture: ComponentFixture<ResourceApiExample4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceApiExample4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceApiExample4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
