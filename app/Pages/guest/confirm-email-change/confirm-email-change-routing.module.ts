import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiermEmailComponent } from '../confierm-email/confierm-email.component';
import { ConfirmEmailChangeComponent } from './confirm-email-change.component';

const routes: Routes = [
  {path:"",component:ConfirmEmailChangeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfirmEmailChangeRoutingModule { }
