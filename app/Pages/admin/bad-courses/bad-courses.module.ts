import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadCoursesRoutingModule } from './bad-courses-routing.module';
import { BadCoursesComponent } from './bad-courses.component';


@NgModule({
  declarations: [
    BadCoursesComponent
  ],
  imports: [
    CommonModule,
    BadCoursesRoutingModule
  ]
})
export class BadCoursesModule { }
