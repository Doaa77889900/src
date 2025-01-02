import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmEmailChangeComponent } from './confirm-email-change.component';

describe('ConfirmEmailChangeComponent', () => {
  let component: ConfirmEmailChangeComponent;
  let fixture: ComponentFixture<ConfirmEmailChangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmEmailChangeComponent]
    });
    fixture = TestBed.createComponent(ConfirmEmailChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
