import { beforeEach, describe, expect, it } from "vitest";
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceApiExample9 } from './resource-api-example9';

describe('ResourceApiExample9', () => {
    let component: ResourceApiExample9;
    let fixture: ComponentFixture<ResourceApiExample9>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ResourceApiExample9]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ResourceApiExample9);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
