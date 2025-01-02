import { Component } from '@angular/core';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  isLoading=false;
  constructor(private loder:LoaderService){
    this.loder.loading$.subscribe(loading=>this.isLoading=loading);
      }}
