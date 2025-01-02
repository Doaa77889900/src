import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminProfileRoutingModule } from './admin-profile-routing.module';
import { AdminInformationComponent } from './admin-information/admin-information.component';
import { AdminSecurityComponent } from './admin-security/admin-security.component';
import { AdminHelpComponent } from './admin-help/admin-help.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminInformationComponent,
    AdminSecurityComponent,
    AdminHelpComponent
  ],
  imports: [
    CommonModule,
    AdminProfileRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminProfileModule { }
