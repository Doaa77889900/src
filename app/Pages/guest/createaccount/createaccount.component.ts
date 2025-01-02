import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent {
  creatAccount:any;
  isLoading=false;

  constructor(private form: FormBuilder,private http:HttpClient,private router:Router) {
    this.creatAccount = this.form.group({
      Name: ["", [Validators.required, Validators.maxLength(50), Validators.minLength(3)]],
      userEmail: ["", [Validators.email, Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      password: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      PhoneNumber: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(16)]],
      AboutMe: [""]

    })
  }
  
  show=true;
  password="password";
  passwordeye(){
    this.show=!this.show;
if(this.show){
  this.password="password"
}
else{
  this.password="text"
}
  }
  capital:String="Contains one uppercase ";
  capitalvalid:Boolean=false;
  Char:String="Contains one special character(@,#,%,etc)";
  Charvalid:Boolean=false;

  Number:String="Contains one number";
  Numbervalid:Boolean=false;

  lower:String="Contains one lowercase";
  lowervalid:Boolean=false;
  validPassword:boolean=false;
  passwordvalidation(value:any){
    this.capitalvalid=/[A-Z]/.test(value) ? true:false;
    this.lowervalid=/[a-z]/.test(value) ? true:false;
    this.Numbervalid=/[0-9]/.test(value) ? true:false;
    this.Charvalid=/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value)? true:false
    if(  this.capitalvalid &&   this.lowervalid && this.Numbervalid && this.Charvalid){
      this.validPassword=true;
    }
    else{
      this.validPassword=false;
    }
  }
  validLableEmail="";
  validLablePassword=""
  validLableName=""
  validLablePhoneNumber=""
  validName=false;
  ValidLableAboutMe=""
  teahcer=false;
  isValidTeacher=false
  Role(value:any){
if(value=="Company"){
  this.teahcer=true
} 
else{
  this.teahcer=false
}
}
  createAccount(){
   let isValid=false;
   if(this.creatAccount.get("Name").hasError("required")){
    this.validLableName="This field is required"
   }
   else if(this.creatAccount.get("Name").hasError("minlength")){
    this.validLableName="length must be between 4-16"

   }
   else if(this.creatAccount.get("Name").hasError("maxlength")){
    this.validLableName="length must be between 4-16"

   }
   else if(/\s/.test(this.creatAccount.get("Name").value)){
    this.validLableName="without spacing"
    this.validName=false;
   }
   else{
    this.validLableName=""
    this.validName=true
   }
    if(this.creatAccount.get('userEmail').hasError('required')){
      this.validLableEmail="This field is required"
    }
    else if(this.creatAccount.get('userEmail').hasError('email') ){
      this.validLableEmail="Enter valid Email 'user@example.com'"
    }
    else{
      this.validLableEmail=""
    }
    if(this.creatAccount.get('password').hasError('required')){
      this.validLablePassword="This field is required"
    }
    else if(this.creatAccount.get('password').hasError('minlength') ){
      this.validLablePassword="length must be between 8-16"
    }
    else if(this.creatAccount.get('password').hasError('maxlength')){
      this.validLablePassword="length must be between 8-16"
    }
    else{
      this.validLablePassword=""
    }
    if(this.creatAccount.get('PhoneNumber').hasError('required')){
      this.validLablePhoneNumber="This field is required"
    }
    else if(this.creatAccount.get('PhoneNumber').hasError('minlength') ){
      this.validLablePhoneNumber="length must be exactly 10"
    }
    else if(this.creatAccount.get('PhoneNumber').hasError('maxlength')){
      this.validLablePhoneNumber="length must be exactly 10"
    }
    else{
      this.validLablePhoneNumber=""
    }
    if(this.creatAccount.get('AboutMe').value.trim().length === 0){
      this.ValidLableAboutMe="This field is required"
      this.isValidTeacher=false
    }
    else if(this.creatAccount.get('AboutMe').value.length<50 ){
      this.ValidLableAboutMe="length must be between 50-200"
      this.isValidTeacher=false

    }
    else if(this.creatAccount.get('AboutMe').value.length>200){
      this.ValidLableAboutMe="length must be between 50-200"
      this.isValidTeacher=false

    }
    else{
      this.ValidLableAboutMe=""
      this.isValidTeacher=true

    }
    if(this.creatAccount.valid && this.validPassword&&this.validName && !this.teahcer){
      this.isLoading=true;
      if(!this.teahcer){
      let newUser={
        "userName":this.creatAccount.get("Name").value ,
        "email": this.creatAccount.get('userEmail').value,
        "passwordHash": this.creatAccount.get('password').value,
        "phoneNumber": this.creatAccount.get('PhoneNumber').value,
        "usersPictrues": "https://res.cloudinary.com/dolmafyz2/image/upload/v1713036363/shakpm74duvy4snp5pll.png"
      }

      const url = `https://corzacademy.runasp.net/api/Users/register`;
      this.http.post(url,newUser).subscribe((response:any) => {
        Swal.fire({
          title: "Success",
          text: response.message,
          icon: "success"
        }).then(()=>{
          this.isLoading=false;

this.router.navigate(["/signin"])
        });        },(error)=>{
          this.isLoading=false;
          Swal.fire({
            title: "Error",
            text: error.error.message,
            icon: "error"
          })
        }
      
      )
      
      
    }}
else if(this.teahcer && this.isValidTeacher){
  let newUser={
    "userName":this.creatAccount.get("Name").value ,
    "email": this.creatAccount.get('userEmail').value,
    "passwordHash": this.creatAccount.get('password').value,
    "phoneNumber": this.creatAccount.get('PhoneNumber').value,
    "usersPictrues": "https://res.cloudinary.com/dolmafyz2/image/upload/v1713036363/shakpm74duvy4snp5pll.png",
    "AboutMe":this.creatAccount.get('AboutMe').value
  }
  console.log("doneee")
  const url = `https://corzacademy.runasp.net/api/Users/registerTeacher`;
  this.http.post(url,newUser).subscribe((response:any) => {
    this.isLoading=false;
    Swal.fire({
      title: "Success",
      text: response.message,
      icon: "success"
    }).then(()=>{
      this.isLoading=false;

this.router.navigate(["/signin"])
    });},(error)=>{
      this.isLoading=false;
      Swal.fire({
        title: "Error",
        text: error.error.message,
        icon: "error"
      })
    }
  
  )
}
  }
}
