import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoadMapRoutingModule } from './road-map-routing.module';
import { FrontEndComponent } from './front-end/front-end.component';
import { HomeRoadComponent } from './Home/home-road.component';
import { BackEndComponent } from './back-end/back-end.component';
import { BasicOfComputerComponent } from './basic-of-computer/basic-of-computer.component';


@NgModule({
  declarations: [
    FrontEndComponent,
    HomeRoadComponent,
    BackEndComponent,
    BasicOfComputerComponent
  ],
  imports: [
    CommonModule,
    RoadMapRoutingModule
  ]
})
export class RoadMapModule { }
