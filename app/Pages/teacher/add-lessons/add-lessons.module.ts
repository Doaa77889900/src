import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddLessonsRoutingModule } from './add-lessons-routing.module';
import { AddLessonsComponent } from './add-lessons.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddLessonsComponent
  ],
  imports: [
    CommonModule,
    AddLessonsRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddLessonsModule { }
