import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLessonsPageRoutingModule } from './admin-lessons-page-routing.module';
import { AdminLessonsPageComponent } from './admin-lessons-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AdminLessonsPageComponent
  ],
  imports: [
    CommonModule,
    AdminLessonsPageRoutingModule,
    SharedModule
  ]
})
export class AdminLessonsPageModule { }
