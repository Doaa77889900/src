import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationComponent } from './information/information.component';
import { SecurityComponent } from './security/security.component';
import { ProfilehelpComponent } from './profilehelp/profilehelp.component';

const routes: Routes = [
  {path:"",component:InformationComponent},
  {path:"security",component:SecurityComponent},
  {path:"help",component:ProfilehelpComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherProfileRoutingModule { }
