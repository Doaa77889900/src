import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestPagesComponent } from './guest-pages.component';

describe('GuestPagesComponent', () => {
  let component: GuestPagesComponent;
  let fixture: ComponentFixture<GuestPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuestPagesComponent]
    });
    fixture = TestBed.createComponent(GuestPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
