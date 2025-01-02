import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursePageRoutingModule } from './course-page-routing.module';
import { CoursePageComponent } from './course-page.component';


@NgModule({
  declarations: [
    CoursePageComponent
  ],
  imports: [
    CommonModule,
    CoursePageRoutingModule
  ]
})
export class CoursePageModule { }
