import { beforeEach, describe, expect, it } from "vitest";
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsExample3 } from './ls-example3';

describe('LsExample3', () => {
    let component: LsExample3;
    let fixture: ComponentFixture<LsExample3>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LsExample3]
        })
            .compileComponents();

        fixture = TestBed.createComponent(LsExample3);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
