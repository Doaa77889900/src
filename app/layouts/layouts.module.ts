import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { AdminPagesComponent } from './admin-pages/admin-pages.component';
import { UserPagesComponent } from './user-pages/user-pages.component';
import { TeacherPagesComponent } from './teacher-pages/teacher-pages.component';
import { GuestPagesComponent } from './guest-pages/guest-pages.component';

@NgModule({
  declarations: [
    AdminPagesComponent,
    UserPagesComponent,
    TeacherPagesComponent,
    GuestPagesComponent,
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
  ]
})
export class LayoutsModule { }
