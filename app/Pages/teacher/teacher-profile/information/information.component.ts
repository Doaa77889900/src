import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicesService } from 'src/app/services/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent {
  usersDatalocal: any = localStorage.getItem("user");
  userData:any={}
  updateDataForm:any;
  imageUrl: string | undefined;
  subscription:Subscription|undefined;
  isLoading=true;
  
  constructor(private services:ServicesService,private router:Router,private form:FormBuilder,private http:HttpClient){
    
    if (this.usersDatalocal && this.usersDatalocal.length > 0) {
      var userid = JSON.parse(this.usersDatalocal!).id;
      var token = JSON.parse(this.usersDatalocal!).usertoken;
      this.subscription = this.services.getUserInformation(userid,token).subscribe((response)=>{
    this.userData=response
    console.log(response)
    this.updateDataForm.patchValue({
  
      userName:this.userData.userName,
      Email:this.userData.userEmail,
      phone:this.userData.phoneNumber|| " ",
      AboutMe:this.userData.aboutMe|| " ",

      
    })
    this.imageUrl=this.userData.usersPictrues;
    this.isLoading=false;
  
  },(error)=>{
  this.router.navigate(["/signin"])
  })
  
    }
  
  
    this.updateDataForm=this.form.group({
      userName:[{value: '', disabled: true},[Validators.required, Validators.maxLength(50), Validators.minLength(3)]],
      Email:[{value: '', disabled: true},[Validators.email,Validators.required,Validators.minLength(4),Validators.maxLength(50)]],
      phone:[{value: '', disabled: true},[Validators.required,Validators.maxLength(16),Validators.minLength(10)]],
      AboutMe: [{value:'',disabled: true},[Validators.required,Validators.minLength(50),Validators.maxLength(200)]],
      file:['',this.fileValidator]
    })
  }
    ngOnDestroy(): void {
  if(this.subscription){
    this.subscription.unsubscribe();
  }
    }
  fileValidator(control: any) {
    const file = control.value;
    if (file) {
      const maxSize = 3 * 1024 * 1024; // 3 MB in bytes
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif']; // Allowed image types
      if (file.size > maxSize) {
        return { 'maxSizeExceeded': true };
      }
      if (!allowedTypes.includes(file.type)) {
        return { 'invalidFileType': true };
      }
    }
    return null;
  }
  selectedFile: File | null = null;
  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader: FileReader = new FileReader();
  
    if (file) {
      const maxSize = 3 * 1024 * 1024;
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!allowedTypes.includes(file.type)) {
        alert('Only image files (JPEG, PNG, GIF) are allowed.');
        return;
      }
      if (file.size > maxSize) {
        alert('File size exceeds 3 MB limit.');
        return;
      }
      this.selectedFile = file;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    } else {
      // Clear the selected file
      this.selectedFile = null;
    }
  }
  isEditingVar=true;
  isEditing(){
    console.log(this.isEditingVar)
    const aboutMeControl = this.updateDataForm.get('AboutMe');

    if(this.isEditingVar){
      console.log("osiadjoisaj")
    this.updateDataForm.get('userName').enable();
    this.updateDataForm.get('phone').enable();
    aboutMeControl.enable();

    this.isEditingVar=false;
  }
  else{
    this.updateDataForm.get('userName').disable();
    this.updateDataForm.get('phone').disable();
    aboutMeControl.disable();

     this.isEditingVar=true;
     console.log(this.isEditingVar)
  
  }
  }
  isChange=false;
  ischaging(){
    this.isChange=true;
  }
  isDeletedPhoto=false
  deletedPhoto(){
    this.isDeletedPhoto=true
    this.imageUrl="https://res.cloudinary.com/dolmafyz2/image/upload/v1713036363/shakpm74duvy4snp5pll.png"
  }
  validLableName=""
  validLablePhoneNumber=""
  validPhone=false;
  validName=false;
  ValidLableAboutMe=""
  isValidTeacher=false;
  updateUserData(){
    if((/\s/.test(this.updateDataForm.get("userName").value))){
      this.validLableName="Must be without spacing"
      this.validName=true;
    }
    else if(this.updateDataForm.get("userName").hasError("required")){
  this.validLableName="This filed is required"
  this.validName=true;
  }
  else if(this.updateDataForm.get("userName").hasError("minlength")){
    this.validLableName="length must be between 3-50"
    this.validName=true;
  
  }
  else if(this.updateDataForm.get("userName").hasError("maxlength")){
    this.validLableName="length must be between 3-50"
    this.validName=true;
  
  }
  else{
    this.validLableName=""
    this.validName=false;
  }
  console.log(this.updateDataForm)
  if(this.updateDataForm.get("phone").hasError("required")){
    this.validLablePhoneNumber="this filed is required"
    this.validPhone=true;
    }
    else if(this.updateDataForm.get("phone").hasError("minlength")){
      this.validLablePhoneNumber="length must be exactly 10"
      this.validPhone=true;
    
    }
    else if(this.updateDataForm.get("phone").hasError("maxlength")){
      this.validLablePhoneNumber="length must be exactly 10"
      this.validPhone=true;
    
    }
    else{
      this.validLablePhoneNumber=""
      this.validPhone=false;
    }
 
    if(this.updateDataForm.get('AboutMe').value.trim().length === 0){
      this.ValidLableAboutMe="This field is required"
      this.isValidTeacher=false
    }
    else if(this.updateDataForm.get('AboutMe').value.length<50 ){
      this.ValidLableAboutMe="length must be between 50-200"
      this.isValidTeacher=false

    }
    else if(this.updateDataForm.get('AboutMe').value.length>200){
      this.ValidLableAboutMe="length must be between 50-200"
      this.isValidTeacher=false

    }
    else{
      this.ValidLableAboutMe=""
      this.isValidTeacher=true

    }
    if(!this.validName&&!this.validPhone&&this.isValidTeacher){
    if (this.usersDatalocal && this.usersDatalocal.length > 0) {
      var userid = JSON.parse(this.usersDatalocal!).id;
      var token = JSON.parse(this.usersDatalocal!).usertoken;
      var name=this.updateDataForm.get('userName').value;
      var number=this.updateDataForm.get('phone').value;
      var aboutMe=this.updateDataForm.get('AboutMe').value;

      this.isLoading=true;
      const request={
        "id":userid,
        "token":token,
        "name":name,
        "phoneNumber":number,
        "aboutMe":aboutMe
      }
     if(this.selectedFile){ 
      const Datauser={
        "id":userid,
        "token":token
      }
      const formData = new FormData();
              formData.append('file', this.selectedFile);
              formData.append('id', userid);
              formData.append('token', token);

      const url = `https://corzacademy.runasp.net/api/Users/upload user pictures`;
      this.http.post(url, formData).subscribe((response:any) => {
        this.isLoading=false;
        this.isEditingVar=true
        Swal.fire({
          title: "Success",
          text: response.message,
          icon: "success"
        });  
          },
    (error)=>{
      this.isEditingVar=true
      this.isLoading=false;
      Swal.fire({
        title: "Error",
        text: error.error.message,
        icon: "error"
      });     }
    );
    }
    
  
    if(this.isChange){
      this.isLoading=true;
      const url = `https://corzacademy.runasp.net/api/Users/update user data`;
      this.http.post(url, request).subscribe((response:any) => {
        Swal.fire({
          title: "Success",
          text: response.message,
          icon: "success"
        });  
        this.updateDataForm.disable();
        this.updateDataForm.get('phone').disable();
         this.isEditingVar=true;
         this.isLoading=false;
      },(error)=>{
        Swal.fire({
          title: "Error",
          text: error.error.message,
          icon: "error"
        });   
        this.isLoading=false;
    
      }
    
    )
      
    }
    else{
      this.isLoading=false;
    }
  }
  }
  }
  }
  
  
  

