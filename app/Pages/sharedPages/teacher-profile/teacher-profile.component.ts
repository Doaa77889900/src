import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrls: ['./teacher-profile.component.css']
})
export class TeacherProfileComponent {
[x: string]: any;
  usersDatalocal: any = localStorage.getItem("user");
teacherData:any={teacherData:""}
thereisnoteahcer=true;
constructor(private http:HttpClient,private parms:ActivatedRoute,private router :Router){
  this.parms.params.subscribe((parms: any) => {

  if (this.usersDatalocal && this.usersDatalocal.length > 0) {
    var userid = JSON.parse(this.usersDatalocal!).id;
    var token = JSON.parse(this.usersDatalocal!).usertoken;
  const request={
    "userId":userid,
    "token":token,
"teacherName":parms.teacherName
  }
  const url = `https://corzacademy.runasp.net/api/teacher/get teacher profile`;
  this.http.post(url, request).subscribe((response) => {
    console.log(response)
    this.teacherData=response
    this.thereisnoteahcer=false

  },(error)=>{
    if (error.status === 404) {
      this.router.navigate(["/signin"])
    } 
    this.thereisnoteahcer=true
  })
 
}else{
this.router.navigate(["/signin"])
}
})

}
parseInt(value: string): number {
  return parseInt(value, 10) || 0; // Parse to integer with radix 10, fallback to 0 if parsing fails.
}
}
