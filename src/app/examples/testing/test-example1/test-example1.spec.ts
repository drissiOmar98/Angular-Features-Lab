import { beforeEach, describe, expect, it } from "vitest";
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestExample1 } from './test-example1';

describe('TestExample1', () => {
    let component: TestExample1;
    let fixture: ComponentFixture<TestExample1>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestExample1]
        })
            .compileComponents();

        fixture = TestBed.createComponent(TestExample1);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
