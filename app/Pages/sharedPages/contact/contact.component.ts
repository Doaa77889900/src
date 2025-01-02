import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactDataFrom:any
  constructor(private form: FormBuilder,private http:HttpClient,private router:Router) {
    this.contactDataFrom = this.form.group({
      Name: ["", [Validators.required, Validators.maxLength(16), Validators.minLength(3)]],
      userEmail: ["", [Validators.email, Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      subject: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
      body: ["", [Validators.required, Validators.minLength(20), Validators.maxLength(200)]]
    })
  }

validNameLable=""
validUserEmail=""
validSubject=""
validBody=""

addContact(){
  if(this.contactDataFrom.get('Name').hasError('required')){
    this.validNameLable="This field is required"
  }
  else if(this.contactDataFrom.get('Name').hasError('minlength') ){
    this.validNameLable="length must be between 3-16"
  }
  else if(this.contactDataFrom.get('Name').hasError('maxlength')){
    this.validNameLable="length must be between 3-16"
  }
  else{
    this.validNameLable=""
  }
  if(this.contactDataFrom.get('userEmail').hasError('required')){
    this.validUserEmail="This field is required"
  }
  else if(this.contactDataFrom.get('userEmail').hasError('minlength') ){
    this.validUserEmail="length must be between 3-16"
  }
  else if(this.contactDataFrom.get('userEmail').hasError('maxlength')){
    this.validUserEmail="length must be between 3-16"
  }
  else{
    this.validUserEmail=""
  }
  if(this.contactDataFrom.get('subject').hasError('required')){
    this.validSubject="This field is required"
  }
  else if(this.contactDataFrom.get('subject').hasError('minlength') ){
    this.validSubject="length must be between 3-16"
  }
  else if(this.contactDataFrom.get('subject').hasError('maxlength')){
    this.validSubject="length must be between 3-16"
  }
  else{
    this.validSubject=""
  }
  
  if(this.contactDataFrom.get('body').hasError('required')){
    this.validBody="This field is required"
  }
  else if(this.contactDataFrom.get('body').hasError('minlength') ){
    this.validBody="length must be between 20-200"
  }
  else if(this.contactDataFrom.get('body').hasError('maxlength')){
    this.validBody="length must be between 20-200"
  }
  else{
    this.validBody=""
  }

  if(this.contactDataFrom.valid){
var request={
  "email":this.contactDataFrom.get('userEmail').value,
  "username": this.contactDataFrom.get('Name').value,
  "subject": this.contactDataFrom.get('subject').value,
  "body": this.contactDataFrom.get('body').value
}
const url = `https://corzacademy.runasp.net/api/Users/insert contact`;
this.http.post(url,request).subscribe((response:any) => {
  Swal.fire({
    title: "Success",
    text: "We will send you an email.",
    icon: "success"
  })
  this.contactDataFrom.reset()
},(error)=>{
  console.log(error)
  
  Swal.fire({
    title: "Error",
    text: "We will be back",
    icon: "error"
  })
})
}
}
}
