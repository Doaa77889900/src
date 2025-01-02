import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnDestroy{
  imageUrl: string | undefined;
  usersDatalocal: any = localStorage.getItem("user");
  userData:any={}
  subscription:Subscription|undefined;
  coursesDeitel:any=[{}]
  isLoading=false;

  constructor(private services:ServicesService,private router:Router,private http:HttpClient){
    this.isLoading=true;
    if (this.usersDatalocal && this.usersDatalocal.length > 0) {
      var userid = JSON.parse(this.usersDatalocal!).id;
      var token = JSON.parse(this.usersDatalocal!).usertoken;
       this.subscription = this.services.getUserInformation(userid,token).subscribe((response)=>{
        this.userData=response
        this.imageUrl=this.userData.usersPictrues;
        const requset={
          "id":userid,
          "token":token
        }
        const url = `https://corzacademy.runasp.net/api/courses/get user courses`;
        
        return this.http.post(url,requset).subscribe((response)=>{
          this.coursesDeitel=response
this.isLoading=false;
        },(error)=>{
          this.isLoading=false;
this.router.navigate(["/"])
        });

  },(error)=>{
  this.router.navigate(["/signin"])
  })

    }
  
  }
  ngOnDestroy(): void {
   if(this.subscription){
    console.log("done")
    this.subscription.unsubscribe()
   }
    
  }
}