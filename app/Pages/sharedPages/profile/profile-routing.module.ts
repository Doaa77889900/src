import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationComponent } from './information/information.component';
import { CoursesComponent } from './courses/courses.component';
import { SecurityComponent } from './security/security.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  { path: '', redirectTo: 'information', pathMatch: 'full' }, // Redirect to 'information' by default
  {path:"information",component:InformationComponent},
  {path:"courses",component:CoursesComponent},
  {path:"security",component:SecurityComponent},
  {path:"help",component:HelpComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
