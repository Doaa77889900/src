import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherLessonsPageComponent } from './teacher-lessons-page.component';

describe('TeacherLessonsPageComponent', () => {
  let component: TeacherLessonsPageComponent;
  let fixture: ComponentFixture<TeacherLessonsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherLessonsPageComponent]
    });
    fixture = TestBed.createComponent(TeacherLessonsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
