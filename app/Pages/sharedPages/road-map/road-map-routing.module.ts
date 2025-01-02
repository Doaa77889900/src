import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontEndComponent } from './front-end/front-end.component';
import { HomeRoadComponent } from './Home/home-road.component';
import { BackEndComponent } from './back-end/back-end.component';
import { BasicOfComputerComponent } from './basic-of-computer/basic-of-computer.component';

const routes: Routes = [
  {path:"",component:HomeRoadComponent},
  {path:"front-end",component:FrontEndComponent},
  {path:"back-end",component:BackEndComponent},
  {path:"basic",component:BasicOfComputerComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoadMapRoutingModule { }
