import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLessonsPageComponent } from './admin-lessons-page.component';

describe('AdminLessonsPageComponent', () => {
  let component: AdminLessonsPageComponent;
  let fixture: ComponentFixture<AdminLessonsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminLessonsPageComponent]
    });
    fixture = TestBed.createComponent(AdminLessonsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
