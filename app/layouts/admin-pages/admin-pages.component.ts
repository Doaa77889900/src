import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-admin-pages',
  templateUrl: './admin-pages.component.html',
  styleUrls: ['./admin-pages.component.css']
})
export class AdminPagesComponent {
  isLogin = false;
  usersDatalocal = localStorage.getItem("user")!;
  userData: any = {}
  isLoading = false;

  constructor(private authService: AuthenticationService, private route: Router, private loader: LoaderService, private Http: ServicesService) {
    if (this.usersDatalocal && this.usersDatalocal.length > 0) {
      this.isLoading=true
      this.isLogin = true;
      var id = JSON.parse(this.usersDatalocal).id;
      var token = JSON.parse(this.usersDatalocal).usertoken;
      this.loader.showLoader();
      this.Http.getUserRole(id,token).subscribe((response)=>{
        if(response[0]!="admin"){
          this.isLoading=false
          this.route.navigate([""])
        }
      })
      this.Http.getUserInformation(id, token).subscribe(
        (response) => {
          this.isLoading=false

          this.userData = response
          this.loader.hideLoader()
        },
        (error) => {
          this.isLoading=false
          localStorage.removeItem("user")
          this.route.navigate(["/signin"])
          window.location.reload()
          this.loader.hideLoader();
        }
      )

    }

  }

  ngOnInit() {
    this.loader.showLoader();
    this.authService.isAdmin$.subscribe(isAdmin => {
      if (isAdmin) {
        this.loader.hideLoader();

      }
      else {
        this.loader.hideLoader();
        this.route.navigate(["/signin"])

      }
    })
   
  }
  logout() {
    this.authService.logout();
    this.route.navigate([""]);

  }
  sidebarActive = false;

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }
  toggleCollapse(collapseId: string) {
    const collapseElement = document.getElementById(collapseId);
    if (collapseElement) {
      collapseElement.classList.toggle('show');
    }
  }
}
