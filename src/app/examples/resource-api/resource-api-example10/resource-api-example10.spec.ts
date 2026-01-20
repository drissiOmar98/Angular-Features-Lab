import { beforeEach, describe, expect, it } from "vitest";
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceApiExample10 } from './resource-api-example10';

describe('ResourceApiExample10', () => {
    let component: ResourceApiExample10;
    let fixture: ComponentFixture<ResourceApiExample10>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ResourceApiExample10]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ResourceApiExample10);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
