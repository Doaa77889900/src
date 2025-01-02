import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-lessons',
  templateUrl: './add-lessons.component.html',
  styleUrls: ['./add-lessons.component.css']
})
export class AddLessonsComponent {
  idOfCourse: any;
  addform:any;
  usersDatalocal = localStorage.getItem("user");
  isLoading=true;

  constructor(private route: ActivatedRoute, private http: HttpClient,private router:Router,private from:FormBuilder) {

    this.addform=this.from.group({
      lessonsName:['',[Validators.required,Validators.maxLength(50),Validators.minLength(4)]],
      lessonsDescription:['',[Validators.required,Validators.maxLength(100),Validators.minLength(16)]],
    })
    if (this.usersDatalocal && this.usersDatalocal.length > 0) {
      var userid = JSON.parse(this.usersDatalocal!).id;
      var token = JSON.parse(this.usersDatalocal!).usertoken;
      this.route.params.subscribe((parms) => { this.idOfCourse = parms 
const request={
"token":token,
"userId":userid,
"courseId":this.idOfCourse.courseId
}     
      const url = `https://corzacademy.runasp.net/api/courses/getCourseDataForTeacher`;
      this.http.post(url,request).subscribe((response)=>{
        this.isLoading=false
      },
      (error)=>{
        Swal.fire({
          title: "error",
          text:error,
          icon: "error"
        }).then(()=>{
          this.router.navigate(["/company"])
        });   
      }
    
    )})
    }
  }
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;
  selectedVideo: string | ArrayBuffer | null = null;
  loadingProgress: number | null = null;
  timeRemaining: number | null = null;
  timeRemainingFormatted: string = '';

  fileValidator(control: any) {
    const file = control.value;
    if (file && file instanceof File) {
      const maxSize = 100 * 1024 * 1024; // 100 MB in bytes
      const allowedType = 'video/mp4'; // Only allow mp4 files
  
      if (file.size > maxSize) {
        return { 'maxSizeExceeded': true };
      }
      if (file.type !== allowedType) {
        return { 'invalidFileType': true };
      }
    }
    return null; // Return null when the file type is valid
  }
  
  
  

  
  selectedFile: File | null = null;

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const maxSize = 100 * 1024 * 1024;
      const allowedType = 'video/mp4';
  
      if (file.type !== allowedType) {
        alert('Only video files (MP4) are allowed.');
        this.videoValidLabel = "*Only video files (MP4) are allowed.";
        this.selectedFile = null;
        return;
      }
  
      if (file.size > maxSize) {
        alert('File size exceeds 100 MB limit.');
        this.videoValidLabel = "*File size exceeds 100 MB limit.";
        this.selectedFile = null;
        return;
      }
  
      this.videoValidLabel = "";
      this.selectedFile = file;
      this.addform.markAsDirty(); // Mark the form as dirty to trigger validation
  
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedVideo = e.target.result;
        this.loadingProgress = null;
        this.timeRemaining = null;
  
        // Reload the video element to reflect the changes
        if (this.videoPlayer) {
          this.videoPlayer.nativeElement.load();
        }
      };
      reader.readAsDataURL(file);
  
      reader.onprogress = (e: ProgressEvent<FileReader>) => {
        if (e.lengthComputable) {
          this.loadingProgress = (e.loaded / e.total) * 100;
  
          // Calculate time remaining based on current progress
          const bytesLoaded = e.loaded;
          const totalBytes = e.total;
          const remainingBytes = totalBytes - bytesLoaded;
          const currentSpeed = bytesLoaded / (e.timeStamp / 1000);
          this.timeRemaining = remainingBytes / currentSpeed;
  
          // Format the remaining time
          this.timeRemainingFormatted = this.formatTime(this.timeRemaining);
        }
      };
    }
  }
  
  
  
  
 formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }

  

lessonsNameValidLabel=""
lessonsNameValid=false;
LessonsDescriptionValidLabel=""
LessonsDescriptionValid=false 
videoValidLabel=""
VidelValid=false;

  addlessonsMethod(){
    
    if (this.addform.get("lessonsName").hasError("required")) {
      this.lessonsNameValidLabel = "*This filed is required";
      this.lessonsNameValid = false
    }
    else if (this.addform.get("lessonsName").hasError("minlength")) {
      this.lessonsNameValidLabel = "*Name must be between 4-50";
      this.lessonsNameValid = false

    }
    else if (this.addform.get("lessonsName").hasError("maxlength")) {
      this.lessonsNameValidLabel = "*Name must be between 4-50";
      this.lessonsNameValid = false
    }
    else {
      this.lessonsNameValidLabel = "";
      this.lessonsNameValid = true

    }
    if (this.addform.get("lessonsDescription").hasError("required")) {
      this.LessonsDescriptionValidLabel = "*This filed is required"
      this.LessonsDescriptionValid = false;
    }
    else if (this.addform.get("lessonsDescription").hasError("minlength")) {
      this.LessonsDescriptionValidLabel = "*coures Description must be between 16-100"
      this.LessonsDescriptionValid = false;
      
    }
    else if (this.addform.get("lessonsDescription").hasError("maxlength")) {
      this.LessonsDescriptionValidLabel = "*coures Description must be between 16-100"
      this.LessonsDescriptionValid = false;
    }
    else {
     this.LessonsDescriptionValidLabel = ""
      this.LessonsDescriptionValid = true;
    }
  
console.log(this.addform)
console.log(this.VidelValid)
if (this.addform.valid && this.selectedFile) {
  const request = {
    LessonsName: this.addform.get('lessonsName').value,
    LessonsDescription: this.addform.get('lessonsDescription').value,
    courseId: this.idOfCourse.courseId,
  };
  console.log(request)
  const userid = JSON.parse(this.usersDatalocal!).id;
  const token = JSON.parse(this.usersDatalocal!).usertoken;
  const data = {
    userId: userid,
    token: token,
  };

  const formData = new FormData();
  formData.append('lessons.LessonsName', request.LessonsName);
  formData.append('lessons.LessonsDescription', request.LessonsDescription);
  formData.append('lessons.courseId', request.courseId);

  formData.append('data.userId', data.userId);
  formData.append('data.Token', data.token);

  
  this.isLoading=true
  const url = `https://corzacademy.runasp.net/api/lessons/insert lessons`;
  this.http.post(url, formData).subscribe((response: any) => {
    console.log(response);
    const insertVideoRequest = {
      "courseId": this.idOfCourse.courseId,
      "lessonsId": response.lessonsId,
      "id": userid,
      "token": token,
    };
    const videoFormData = new FormData();
          videoFormData.append('courseId', insertVideoRequest.courseId);
          videoFormData.append('lessonsId', insertVideoRequest.lessonsId);
          videoFormData.append('id', insertVideoRequest.id);
          videoFormData.append('token', insertVideoRequest.token);

          if (this.selectedFile) {
            videoFormData.append('file', this.selectedFile);
          }

    const url = `https://corzacademy.runasp.net/api/lessons/upload video`;
    this.http.post(url, videoFormData).subscribe(
      (response: any) => {
        this.isLoading=false
        console.log('doneVideo');
        Swal.fire({
          title: 'Success',
          text: 'insert done',
          icon: 'success',
        });
      },
      (error) => {
        console.log(error)
        Swal.fire({
          title: 'Error',
          text: error,
          icon: 'error',
        });
      }
    );
  },(error)=>{
    console.log(error)
  });
} else {
  if (!this.selectedFile) {
    this.videoValidLabel="*upload video"
    this.VidelValid=false;  }
}
}

    }

  

