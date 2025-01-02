import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherProfileRoutingModule } from './teacher-profile-routing.module';
import { InformationComponent } from './information/information.component';
import { SecurityComponent } from './security/security.component';
import { ProfilehelpComponent } from './profilehelp/profilehelp.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InformationComponent,
    SecurityComponent,
    ProfilehelpComponent
  ],
  imports: [
    CommonModule,
    TeacherProfileRoutingModule,
    ReactiveFormsModule
  ]
})
export class TeacherProfileModule { }
