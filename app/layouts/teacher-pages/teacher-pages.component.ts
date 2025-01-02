import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-teacher-pages',
  templateUrl: './teacher-pages.component.html',
  styleUrls: ['./teacher-pages.component.css']
})
export class TeacherPagesComponent {
  isLogin = false;

   usersDatalocal = localStorage.getItem("user");
   userData:any={}
   
   constructor(private authService: AuthenticationService, private route: Router, private loader: LoaderService, private Http: ServicesService) {
    if (this.usersDatalocal && this.usersDatalocal.length > 0) {

    var id = JSON.parse(this.usersDatalocal!).id;
    var token = JSON.parse(this.usersDatalocal!).usertoken;
    this.loader.showLoader()
    this.Http.getUserRole(id,token).subscribe((response)=>{
      if(response[0]!="teacher"){
        console.log("teacher")
        this.route.navigate(["/"])
        this.loader.hideLoader()

      }
    },
    (error)=>{
      this.route.navigate(["/"])
    }
    
    )
      this.isLogin = true;
this.loader.showLoader();



      this.Http.getUserInformation(id, token).subscribe(
        (response) => {
          this.userData = response
          this.loader.hideLoader()
        },
        (error) => {
          localStorage.removeItem("user")
          this.loader.hideLoader();
          console.log("singing")

          this.route.navigate(["/signin"])
        }
      )

    }
    else{
      this.route.navigate(["/"])  
    }

  }

   

  ngOnInit() {
    this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      this.isLogin = isAuthenticated;
    });
    this.loader.showLoader();
    this.authService.isTeacher$.subscribe(isTeacher=>{
      if(isTeacher){
        this.loader.hideLoader();
      }
      else{
        this.loader.hideLoader();
        // this.route.navigate(["/"])
        
      }
    })

   
  }

  logout() {
    this.authService.logout();
    this.route.navigate([""]);

  }
}
