import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ServicesService } from 'src/app/services/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent {
  idOfCourse: any = 0;
  usersDatalocal: any = localStorage.getItem("user");
  courseDetile: any = { date: "" };
  isLoading = true;
  isRating = false;
  stars: number[] = [1, 2, 3, 4, 5]; // Array to represent the number of stars
  rating: number = 5;
  title = [
    { "value": 1, "label": "Poor 😞" },
    { "value": 2, "label": "Fair 🙂" },
    { "value": 3, "label": "Good 😊" },
    { "value": 4, "label": "Very Good 😄" },
    { "value": 5, "label": "Excellent 😁" }
  ]
  ratingLabel = "";
  // Current rating
  // Method to set the rating when a star is clicked
  setRating(rating: number): void {
    this.rating = rating;
    this.ratingLabel = this.title[rating - 1].label;
    console.log(rating)
  }

  constructor(private id: ActivatedRoute, private auth: AuthenticationService, private router: Router, private service: ServicesService,private Http:HttpClient) {

    this.isLoading = true;
    this.id.params.subscribe(data => { this.idOfCourse = data 
    if (this.auth.isAuthenticated()) {
      if (this.usersDatalocal && this.usersDatalocal.length > 0) {
        var userid = JSON.parse(this.usersDatalocal!).id;
        var token = JSON.parse(this.usersDatalocal!).usertoken;
        this.service.getUserRole(userid, token).subscribe((response) => {
          if (response[0] == "users") {
            this.service.getcourseDeitle(this.idOfCourse['id']).subscribe((response) => { this.courseDetile = response }, (error) => { })
            this.isLoading = false;

          }
          else {
            this.isLoading = false;
            this.router.navigate(["/"])
          }
        },
          (error) => {
            this.isLoading = false;
            this.router.navigate(["/"])
          })

      }



    }
    else {
      console.log("s")
      this.service.getcourseDeitle(this.idOfCourse['id']).subscribe(
        (response) => { this.courseDetile = response;console.log("course") },
         (error) => { this.router.navigate(["/compaines"])})
      this.isLoading = false;
    }
  })

  }

  checkRatng(){
    if (this.usersDatalocal && this.usersDatalocal.length > 0) {
      var userid = JSON.parse(this.usersDatalocal!).id;
      var token = JSON.parse(this.usersDatalocal!).usertoken;
      const request={
        "token":token,
        "userId":userid,
        "courseId":this.idOfCourse.id
      }
    const url = `https://corzacademy.runasp.net/api/courses/checkRating`;
    this.Http.post(url, request).subscribe(
      (response:any) => {
        if(response!=null){
        this.rating=response.rating;
        this.ratingLabel="You've already rated this course here's where you may edit."
        this.isRating=true;
      }
      else{
        this.rating=0;
        this.isRating=true;
      }
      },
      (error) => {
        if (error.status === 204) {

        } else {
          Swal.fire({
            title: "Error",
            text: error.error,
            icon: "error"
          });        }
      }
    );
  
  }
  else{
    this.router.navigate(["/signin"])

  }
  }
  ratingMethod() {
    if (this.usersDatalocal && this.usersDatalocal.length > 0) {
      var userid = JSON.parse(this.usersDatalocal!).id;
      var token = JSON.parse(this.usersDatalocal!).usertoken;
      console.log(this.rating)
      if (this.rating < 0) {
        this.ratingLabel = "you must Rating"
      }
      else {
        console.log(this.idOfCourse)
        const request={
          "token":token,
          "userId":userid,
          "courseId":this.idOfCourse.id,
          "rating":this.rating
        }
        const url = `https://corzacademy.runasp.net/api/courses/updateCourseRating`;
        this.Http.post(url,request).subscribe((response:any) => {
          Swal.fire({
            title: "Success",
            text: response.message,
            icon: "success"
          }).then(()=>{
            this.isRating=false
          });        },
      (error)=>{
        console.log(error)
      });
      }
    }
    else {
      this.router.navigate(["/signin"])
    }
  }

  checkCourse(){
    if (this.usersDatalocal && this.usersDatalocal.length > 0) {
      var userid = JSON.parse(this.usersDatalocal!).id;
      var token = JSON.parse(this.usersDatalocal!).usertoken;
  //   this.service.checkCourse(userid, token, this.idOfCourse.id).subscribe((response) => {
  //     this.router.navigate(['/Lessons', this.idOfCourse.id,1]);
  //   },(erorr)=>{
     
  //   }
  
  // )
  this.showCardInputAlert()
  }
  else{
    this.router.navigate(["/signin"])
  }

}
async showCardInputAlert() {
  
  Swal.fire({
    title: "Do you want to enrollemnt?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "yes",
    denyButtonText: `no`
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
    

    if (this.usersDatalocal && this.usersDatalocal.length > 0) {
      var userid = JSON.parse(this.usersDatalocal!).id;
      var token = JSON.parse(this.usersDatalocal!).usertoken;
      const request={
        "token":token,
        "id":userid,
        "trainingId":this.idOfCourse.id,
      }
    const url = `https://corzacademy.runasp.net/api/Enrollment/Enrollment`;
     this.Http.post(url,request).subscribe((response:any)=>{
    Swal.fire(response.message);
    },(error)=>{
      Swal.fire(""+error.error);


    }
  
  );
     }
} else if (result.isDenied) {
  Swal.fire("Canceld", "", "info");
}
});
}
}


