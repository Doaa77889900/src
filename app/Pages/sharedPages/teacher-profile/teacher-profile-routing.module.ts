import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherDashboardComponent } from '../../teacher/teacher-dashboard/teacher-dashboard.component';
import { TeacherProfileComponent } from './teacher-profile.component';

const routes: Routes = [
  {path:"",component:TeacherProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherProfileRoutingModule { }
