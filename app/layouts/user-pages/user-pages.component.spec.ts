import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPagesComponent } from './user-pages.component';

describe('UserPagesComponent', () => {
  let component: UserPagesComponent;
  let fixture: ComponentFixture<UserPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserPagesComponent]
    });
    fixture = TestBed.createComponent(UserPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
