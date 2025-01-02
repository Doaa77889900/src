import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from './services/authentication.service';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  isLoading: boolean = true; // Declare isLoading property
  constructor(private loder:LoaderService){
this.loder.loadingApp$.subscribe(loading=>this.isLoading=loading);
  }

}
