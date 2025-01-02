import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-guest-pages',
  templateUrl: './guest-pages.component.html',
  styleUrls: ['./guest-pages.component.css']
})
export class GuestPagesComponent implements OnInit {

  isLogin = false;
  userData: any = {};

  constructor(private authService: AuthenticationService, private loader: LoaderService, private router: Router, private http: ServicesService) {}

  ngOnInit() {
    this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      this.isLogin = isAuthenticated;
      if (this.isLogin) {
        this.loadUserData();
      }
    });
  }

  loadUserData() {
    const usersData = localStorage.getItem("user");
    if (usersData && usersData.length > 0) {
      const id = JSON.parse(usersData).id;
      const token = JSON.parse(usersData).usertoken;
      this.loader.showLoader();
      this.http.getUserRole(id,token).subscribe((response)=>{
        if(response[0]=="admin"){
          this.router.navigate(["/admin"])
        }
        else if(response[0]=="teacher")
          this.router.navigate(["/company"])
      })
      this.http.getUserInformation(id, token).subscribe(
        (response) => {
          this.userData = response;
          this.loader.hideLoader();
        },
        (error) => {
          localStorage.removeItem("user");
          this.loader.hideLoader();
          this.router.navigate(["/signin"]);
        }
      );
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate([""]);

  }
}
