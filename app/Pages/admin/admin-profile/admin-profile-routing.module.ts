import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminInformationComponent } from './admin-information/admin-information.component';
import { AdminSecurityComponent } from './admin-security/admin-security.component';
import { AdminHelpComponent } from './admin-help/admin-help.component';

const routes: Routes = [
  {path:"",component:AdminInformationComponent},
  {path:"security",component:AdminSecurityComponent},
  {path:"help",component:AdminHelpComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminProfileRoutingModule { }
