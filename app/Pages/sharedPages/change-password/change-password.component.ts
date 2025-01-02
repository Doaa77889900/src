import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  changePasswordFrom: any;
  tokenVerified: boolean = false;
  email=""
   token=""
  constructor(private from: FormBuilder,private http:HttpClient,private parms:ActivatedRoute,private router:Router) {
    this.parms.paramMap.subscribe(params => {
      this.token = params.get('token')!;
      this.email = params.get('email')!;
   

  var requset={
    "Email": this.email,
    "Token": this.token
  }
  const url = `https://corzacademy.runasp.net/api/Users/confirm-password-change-token`;
    
  this.http.post(url, requset).subscribe((response:any)=>{
this.tokenVerified=true
  },
(error)=>{
console.log(error)
}
);
})
    this.changePasswordFrom = this.from.group({
      passwrod: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      confirmPasswrod: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
    })
  }
  show = true;
  inputType = "password";
  passwrodEye() {
    this.show = !this.show;
    if (this.show) {
      this.inputType = "password"
    }
    else {
      this.inputType = "text";
    }
  }
  lower = "contian at least one lower "
  lowerValid = false;
  capital = "contian at least one capital "
  capitalValid = false;
  char = "contian at least one special character"
  charValid = false;
  number = "contian at least one number"
  numberValid = false;
  validPassword = false;

  passwordvalidation(value: any) {
    this.capitalValid = /[A-Z]/.test(value) ? true : false;
    this.lowerValid = /[a-z]/.test(value) ? true : false;
    this.numberValid = /[0-9]/.test(value) ? true : false;
    this.charValid = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value) ? true : false
    if (this.capitalValid && this.lowerValid && this.numberValid && this.charValid) {
      this.validPassword = true;
    }
    else {
      this.validPassword = false;
    }
  }
  confiermPasswrodLabel:string=""
  confiermPassrodValid=false;
  confiermPasswrodValidation(confiermValue:any,Passwrod:any){
if(confiermValue!=Passwrod){
this.confiermPasswrodLabel="must be same"
this.confiermPassrodValid=false;
}
else{
  this.confiermPasswrodLabel="";
  this.confiermPassrodValid=true;
}
  }
  validPasswordLabel:any="";
  validpasswordlabelvalid=false;
  changePasswrodMethod(){
     let isValid=false;
     if(this.changePasswordFrom.get("passwrod").hasError("required")){
      this.validPasswordLabel="required"
      this.validpasswordlabelvalid = false;

      isValid=false;
     }
     else if(this.changePasswordFrom.get("passwrod").hasError("minlength")){
      this.validPasswordLabel="min length"
      this.validpasswordlabelvalid = false;
      isValid=false;
  
     }
     else if(this.changePasswordFrom.get("passwrod").hasError("maxlength")){
      this.validPasswordLabel="max length"
      this.validpasswordlabelvalid = false;

      isValid=false;
     }
     else{
      this.validPasswordLabel=""
      this.validpasswordlabelvalid = true;

      isValid=true;
     }
    if(isValid && this.validPassword && this.confiermPassrodValid && this.validpasswordlabelvalid){
      const url = `https://corzacademy.runasp.net/api/Users/reset-password`;
      var password=this.changePasswordFrom.get("passwrod").value;
      console.log(password)
     var reset= {
        "email": this.email,
        "token": this.token,
        "newPassword": password
      }
       this.http.post(url, reset).subscribe((response:any)=>{
        Swal.fire({
          title: "Success",
          text: response.message,
          icon: "success"
        }).then(()=>{
this.router.navigate(["/"])
      })},(error)=>{
        Swal.fire({
          title: "Error",
          text: error.message,
          icon: "error"
        })
      })
  
    }
    else{
      console.log("something wrong!")
    }
  }
}
