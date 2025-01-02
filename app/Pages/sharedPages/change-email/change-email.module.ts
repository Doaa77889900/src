import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeEmailRoutingModule } from './change-email-routing.module';
import { ChangeEmailComponent } from './change-email.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChangeEmailComponent
  ],
  imports: [
    CommonModule,
    ChangeEmailRoutingModule,
    ReactiveFormsModule
  ]
})
export class ChangeEmailModule { }
