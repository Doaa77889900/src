import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilehelpComponent } from './profilehelp.component';

describe('ProfilehelpComponent', () => {
  let component: ProfilehelpComponent;
  let fixture: ComponentFixture<ProfilehelpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilehelpComponent]
    });
    fixture = TestBed.createComponent(ProfilehelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
