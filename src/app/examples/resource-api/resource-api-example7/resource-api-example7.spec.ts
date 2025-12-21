import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceApiExample7 } from './resource-api-example7';

describe('ResourceApiExample7', () => {
  let component: ResourceApiExample7;
  let fixture: ComponentFixture<ResourceApiExample7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceApiExample7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceApiExample7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
