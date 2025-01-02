import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinginRoutingModule } from './singin-routing.module';
import { SinginComponent } from './singin.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SinginComponent,
  ],
  imports: [
    CommonModule,
    SinginRoutingModule,
    ReactiveFormsModule,
  ]
})
export class SinginModule { }
