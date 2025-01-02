import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadCoursesComponent } from './bad-courses.component';

describe('BadCoursesComponent', () => {
  let component: BadCoursesComponent;
  let fixture: ComponentFixture<BadCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BadCoursesComponent]
    });
    fixture = TestBed.createComponent(BadCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
