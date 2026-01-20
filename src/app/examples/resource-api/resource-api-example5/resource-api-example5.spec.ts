import { beforeEach, describe, expect, it } from "vitest";
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceApiExample5 } from './resource-api-example5';

describe('ResourceApiExample5', () => {
    let component: ResourceApiExample5;
    let fixture: ComponentFixture<ResourceApiExample5>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ResourceApiExample5]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ResourceApiExample5);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
