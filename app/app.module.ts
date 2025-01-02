import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { HomePageComponent } from './Pages/sharedPages/home-page/home-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from  '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './loader/loader.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MyPipePipe } from './my-pipe.pipe';
import { ConfirmEmailChangeComponent } from './Pages/guest/confirm-email-change/confirm-email-change.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoaderComponent,
    ConfirmEmailChangeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
