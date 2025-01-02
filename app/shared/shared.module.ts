import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPipePipe } from '../my-pipe.pipe';

@NgModule({
  declarations: [
    MyPipePipe,
    // Add other shared components, directives, and pipes here
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MyPipePipe,
    // Export other shared components, directives, and pipes here
  ]
})
export class SharedModule { }
