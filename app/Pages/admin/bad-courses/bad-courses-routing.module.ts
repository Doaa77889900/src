import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadCoursesComponent } from './bad-courses.component';

const routes: Routes = [
  {path:"",component:BadCoursesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BadCoursesRoutingModule { }
