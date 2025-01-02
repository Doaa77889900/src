import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonsPageRoutingModule } from './lessons-page-routing.module';
import { LessonsPageComponent } from './lessons-page.component';
import { MyPipePipe } from 'src/app/my-pipe.pipe';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LessonsPageComponent,
     
  ],
  imports: [
    CommonModule,
    LessonsPageRoutingModule,
    SharedModule
  ],
  
  
})
export class LessonsPageModule { }
