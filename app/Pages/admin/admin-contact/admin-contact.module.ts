import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminContactRoutingModule } from './admin-contact-routing.module';
import { AdminContactComponent } from './admin-contact.component';


@NgModule({
  declarations: [
    AdminContactComponent
  ],
  imports: [
    CommonModule,
    AdminContactRoutingModule
  ]
})
export class AdminContactModule { }
