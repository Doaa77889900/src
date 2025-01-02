import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherProfileRoutingModule } from './teacher-profile-routing.module';
import { TeacherProfileComponent } from './teacher-profile.component';


@NgModule({
  declarations: [
    TeacherProfileComponent
  ],
  imports: [
    CommonModule,
    TeacherProfileRoutingModule
  ]
})
export class TeacherProfileModule { }
