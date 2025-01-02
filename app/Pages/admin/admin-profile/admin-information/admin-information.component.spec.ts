import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInformationComponent } from './admin-information.component';

describe('AdminInformationComponent', () => {
  let component: AdminInformationComponent;
  let fixture: ComponentFixture<AdminInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminInformationComponent]
    });
    fixture = TestBed.createComponent(AdminInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
