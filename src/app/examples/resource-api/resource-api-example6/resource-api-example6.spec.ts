import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceApiExample6 } from './resource-api-example6';

describe('ResourceApiExample6', () => {
  let component: ResourceApiExample6;
  let fixture: ComponentFixture<ResourceApiExample6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceApiExample6]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceApiExample6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
