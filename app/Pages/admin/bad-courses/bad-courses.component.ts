import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bad-courses',
  templateUrl: './bad-courses.component.html',
  styleUrls: ['./bad-courses.component.css']
})
export class BadCoursesComponent {
  usersDatalocal: any = localStorage.getItem("user");
  badCourses:any=[{}]
  isLoading = false;

constructor(private http:HttpClient){
  if (this.usersDatalocal && this.usersDatalocal.length > 0) {
    this.isLoading=true
    var userid = JSON.parse(this.usersDatalocal!).id;
    var token = JSON.parse(this.usersDatalocal!).usertoken;
    const request={
      "id":userid,
      "token":token,
    }
    const url=`https://corzacademy.runasp.net/api/Courses/Bad Courses`
    this.http.post(url,request).subscribe((response:any)=>{
this.badCourses=response;
this.isLoading=false

}
  
  )
   
  }
}

deleteCourse(courseId:number){

  if (this.usersDatalocal && this.usersDatalocal.length > 0) {
    this.isLoading=true

    var userid = JSON.parse(this.usersDatalocal!).id;
    var token = JSON.parse(this.usersDatalocal!).usertoken;
const request={
"token":token,
"userId":userid,
"courseId":courseId
}
Swal.fire({
  title: 'Do you want to delete this course?',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: 'Yes',
  denyButtonText: 'No',
}).then((result) => {
  if (result.isConfirmed) {
  const url = `https://corzacademy.runasp.net/api/courses/delete course`;
  this.http.post(url, request).subscribe((response) => {
console.log("done")
this.badCourses = this.badCourses.filter((course:any) => course.courseId !== courseId);
this.isLoading=false

  },
  (error)=>{
    this.isLoading=false

    console.log(error)
  }

)}else{
  this.isLoading=false
}})}
}
}


