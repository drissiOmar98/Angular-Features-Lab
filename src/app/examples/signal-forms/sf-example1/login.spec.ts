import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from "vitest";

import { Login } from './login';

describe('Login', () => {
  let service: Login;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Login);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
