import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { InformationComponent } from './information/information.component';
import { CoursesComponent } from './courses/courses.component';
import { SecurityComponent } from './security/security.component';
import { HelpComponent } from './help/help.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InformationComponent,
    CoursesComponent,
    SecurityComponent,
    HelpComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
