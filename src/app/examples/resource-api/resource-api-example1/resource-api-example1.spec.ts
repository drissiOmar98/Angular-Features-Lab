import { beforeEach, describe, expect, it } from "vitest";
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceApiExample1 } from './resource-api-example1';

describe('ResourceApiExample1', () => {
    let component: ResourceApiExample1;
    let fixture: ComponentFixture<ResourceApiExample1>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ResourceApiExample1]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ResourceApiExample1);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
