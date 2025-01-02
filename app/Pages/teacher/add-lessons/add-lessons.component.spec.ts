import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLessonsComponent } from './add-lessons.component';

describe('AddLessonsComponent', () => {
  let component: AddLessonsComponent;
  let fixture: ComponentFixture<AddLessonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddLessonsComponent]
    });
    fixture = TestBed.createComponent(AddLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
