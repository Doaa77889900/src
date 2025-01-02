import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherPagesComponent } from './teacher-pages.component';

describe('TeacherPagesComponent', () => {
  let component: TeacherPagesComponent;
  let fixture: ComponentFixture<TeacherPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherPagesComponent]
    });
    fixture = TestBed.createComponent(TeacherPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
