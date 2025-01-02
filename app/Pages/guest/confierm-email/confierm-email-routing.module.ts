import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiermEmailComponent } from './confierm-email.component';

const routes: Routes = [
  {path:"",component:ConfiermEmailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiermEmailRoutingModule { }
