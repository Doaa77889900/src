import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLessonsPageComponent } from './admin-lessons-page.component';

const routes: Routes = [
  {path:"",component:AdminLessonsPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLessonsPageRoutingModule { }
