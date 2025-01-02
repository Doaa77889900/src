import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ServicesService } from 'src/app/services/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit{
  title = 'singin';
  singInForm: any;
  constructor(private form: FormBuilder,private services:ServicesService,private Router:Router,private authService:AuthenticationService,private loder:LoaderService) {
    this.singInForm = this.form.group({
      userEmail: ["", [Validators.email, Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      password: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(16)]]
    })
      // console.log(this.authService.isAuthenticated())

      // if(this.authService.isAuthenticated()){

      // this.Router.navigate(['/']);
      // }
    
  }
  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.Router.navigate(['/']); // Redirect to home page
      }
    });
  }

  // async checkAuthentication() {
  //   if (await this.authService.isAuthenticated()) {
  //     this.Router.navigate(['/']);
  //   }
  // }
  show = true;
  password = "password";
  passwordeye() {
    this.show = !this.show;
    if (this.show) {
      this.password = "password"
    }
    else {
      this.password = "text"
    }
  }
  validLableEmail = "";
  validLablePassword = ""
  ErrorsMesaage="";
  singInFunction() {
    let isEmailValid = false;
    let isPasswordValid = false;

    if (this.singInForm.get('userEmail').hasError('required')) {
      this.validLableEmail = "This field is required"
      isEmailValid = false;
    }
   else if (this.singInForm.get('userEmail').hasError('maxlength')) {
      this.validLableEmail = "Length must be between 4-16"
      isEmailValid = false;
    }
    else if (this.singInForm.get('userEmail').hasError('minlength')) {
      this.validLableEmail = "Length must be between 4-16"
      isEmailValid = false;
    }
    else if (this.singInForm.get('userEmail').hasError('email')) {
      this.validLableEmail = "Enter valid Email 'user@example.com'"
      isEmailValid = false;
    }
    else {
      this.validLableEmail = ""
      isEmailValid=true;
    }
    if (this.singInForm.get('password').hasError('required')) {
      this.validLablePassword = "This field is required"
      isPasswordValid=false;
    }
    else if (this.singInForm.get('password').hasError('minlength')) {
      this.validLablePassword = "length must be between 4-16"
      isPasswordValid=false;

    }
    else if (this.singInForm.get('password').hasError('maxlength')) {
      this.validLablePassword = "length must be between 4-16"
      isPasswordValid=false;

    }
    else {
      this.validLablePassword = ""
      isPasswordValid=true;


    }
    if (this.singInForm.valid && isEmailValid && isPasswordValid) {
      this.loder.showLoader()
      let email=this.singInForm.get('userEmail').value;
      let password=this.singInForm.get('password').value;
this.services.singInMethod(email,password).subscribe(
  (response) => {
    localStorage.setItem("user",JSON.stringify(response))

    let role = response.role;
  
    this.authService.login(role);
    this.loder.hideLoader()
    
if(role=="admin"){
  this.Router.navigate(["/admin"])
}
else if(role=="teacher"){
  this.Router.navigate(["/company"])

}
else{
  this.Router.navigate(['/']);
}
    },
  
  (error) => {
    this.loder.hideLoader()
    console.log(error);
    if (error.status === 404) {
      this.ErrorsMesaage=''+error.error;

    } else if (error.status === 400) {
      this.ErrorsMesaage=''+error.error;

    } else {
      this.ErrorsMesaage= error.error;
    }
  }
);
    }
  }
}
