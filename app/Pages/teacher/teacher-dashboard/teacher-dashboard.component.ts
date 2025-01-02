import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent {
  usersDatalocal = localStorage.getItem("user");
  teacherData: any = {}
  rating=5
  teacherCourses: any = [{}]
  isloading=false;
  
  constructor(private service: ServicesService, private route: Router,private loder:LoaderService) {
    // this.loder.showLoader();
    if (this.usersDatalocal && this.usersDatalocal.length > 0) {
      var id = JSON.parse(this.usersDatalocal!).id;
      var token = JSON.parse(this.usersDatalocal!).usertoken;
      this.service.getTeacherData(id, token).subscribe((response) => { this.teacherData = response; console.log(response) }, (error) => {
        console.log("errors")

      })
      this.service.getTeacherCourses(id, token).subscribe(
        (response) => {this.teacherCourses = response;this.isloading=true;console.log(this.teacherCourses)},
        (error) => {
         console.log("errors")
      })

    }
  }

  generateArray(length: number): any[] {
    console.log(new Array(length))
    return new Array(length);
  }
  }

