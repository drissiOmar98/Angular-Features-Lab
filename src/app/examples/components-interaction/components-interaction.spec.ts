import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsInteraction } from './components-interaction';

describe('ComponentsInteraction', () => {
  let component: ComponentsInteraction;
  let fixture: ComponentFixture<ComponentsInteraction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentsInteraction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsInteraction);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
