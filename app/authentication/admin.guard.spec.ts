import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { AdminGuard } from './admin.guard'; // Corrected import statement

describe('AdminGuard', () => { // Use 'AdminGuard' instead of 'adminGuard'
  let guard: AdminGuard; // Declare 'guard' variable to hold instance of AdminGuard

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminGuard] // Provide AdminGuard in test module
    });
    guard = TestBed.inject(AdminGuard); // Instantiate AdminGuard
  });

  it('should be created', () => {
    expect(guard).toBeTruthy(); // Expect AdminGuard instance to be truthy
  });
});
