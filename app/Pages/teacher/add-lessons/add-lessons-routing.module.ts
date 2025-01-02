import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLessonsComponent } from './add-lessons.component';

const routes: Routes = [
  {path:"",component:AddLessonsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddLessonsRoutingModule { }
