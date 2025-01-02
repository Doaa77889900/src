import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateCourseRoutingModule } from './update-course-routing.module';
import { UpdateCourseComponent } from './update-course.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UpdateCourseComponent
  ],
  imports: [
    CommonModule,
    UpdateCourseRoutingModule,
    ReactiveFormsModule
  ]
})
export class UpdateCourseModule { }
