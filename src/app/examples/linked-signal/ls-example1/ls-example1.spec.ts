import { beforeEach, describe, expect, it } from "vitest";
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsExample1 } from './ls-example1';

describe('LsExample1', () => {
    let component: LsExample1;
    let fixture: ComponentFixture<LsExample1>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LsExample1]
        })
            .compileComponents();

        fixture = TestBed.createComponent(LsExample1);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
