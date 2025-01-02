import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherLessonsPageComponent } from './teacher-lessons-page.component';

const routes: Routes = [
  {path:"",component:TeacherLessonsPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherLessonsPageRoutingModule { }
