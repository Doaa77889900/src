import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesPageRoutingModule } from './courses-page-routing.module';
import { CoursesPageComponent } from './courses-page.component';


@NgModule({
  declarations: [
    CoursesPageComponent
  ],
  imports: [
    CommonModule,
    CoursesPageRoutingModule,
  ]
})
export class CoursesPageModule { }
