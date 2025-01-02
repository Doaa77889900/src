import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiermEmailRoutingModule } from './confierm-email-routing.module';
import { ConfiermEmailComponent } from './confierm-email.component';


@NgModule({
  declarations: [
    ConfiermEmailComponent
  ],
  imports: [
    CommonModule,
    ConfiermEmailRoutingModule
  ]
})
export class ConfiermEmailModule { }
