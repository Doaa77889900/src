import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { LoginAuthGuard } from './login-auth.guard';

describe('LoginAuthGuard', () => {
  let guard: LoginAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginAuthGuard]
    });
    guard = TestBed.inject(LoginAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
