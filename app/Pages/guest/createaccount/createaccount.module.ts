import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateaccountRoutingModule } from './createaccount-routing.module';
import { CreateaccountComponent } from './createaccount.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateaccountComponent
  ],
  imports: [
    CommonModule,
    CreateaccountRoutingModule,
    ReactiveFormsModule
  ]
})
export class CreateaccountModule { 
  
}
