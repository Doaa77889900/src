import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateCourseComponent } from './update-course.component';

const routes: Routes = [
  {path:"",component:UpdateCourseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateCourseRoutingModule { }
