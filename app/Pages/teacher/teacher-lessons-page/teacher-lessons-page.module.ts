import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherLessonsPageRoutingModule } from './teacher-lessons-page-routing.module';
import { TeacherLessonsPageComponent } from './teacher-lessons-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TeacherLessonsPageComponent,
  ],
  imports: [
    CommonModule,
    TeacherLessonsPageRoutingModule,
    SharedModule
  ]
})
export class TeacherLessonsPageModule { }
