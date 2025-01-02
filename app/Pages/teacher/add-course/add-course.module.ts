import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCourseRoutingModule } from './add-course-routing.module';
import { AddCourseComponent } from './add-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    AddCourseComponent
  ],
  imports: [
    CommonModule,
    AddCourseRoutingModule,
    FormsModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    FormsModule // Import ReactiveFormsModule here

  ]
})
export class AddCourseModule { }
