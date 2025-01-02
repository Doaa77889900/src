import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { LoginAuthGuard } from './login-auth.guard'; // Corrected import statement

describe('LoginAuthGuard', () => { // Use 'LoginAuthGuard' instead of 'loginAuthGuard'
  let guard: LoginAuthGuard; // Declare 'guard' variable to hold instance of LoginAuthGuard

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginAuthGuard] // Provide LoginAuthGuard in test module
    });
    guard = TestBed.inject(LoginAuthGuard); // Instantiate LoginAuthGuard
  });

  it('should be created', () => {
    expect(guard).toBeTruthy(); // Expect LoginAuthGuard instance to be truthy
  });
});
