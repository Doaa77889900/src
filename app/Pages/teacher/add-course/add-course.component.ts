import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  form: any;
  isLoading=false;

  constructor(private formBuilder: FormBuilder, private services: ServicesService,private router:Router) {
    this.selectedCategory = "Technology"; 
    this.selectedType = "Database Management";
    this.form = this.formBuilder.group({
      couresName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      couresDescription: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(200)]],
      couresType: [this.selectedType, Validators.required],
      coursesCatagory: [this.selectedCategory, Validators.required],
      couresLanguage: ['English', Validators.required],
      couresValue: [0, [Validators.required, Validators.min(0), Validators.max(999)]],
      file: [null, [this.fileValidator]] 
    });
    this.onCategoryChange();

  }
  languages =
    [
      "English", "Spanish", "Chinese", "Hindi", "Arabic",
      "Bengali", "Portuguese", "Russian", "Japanese", "German",
      "French", "Korean", "Italian", "Turkish", "Vietnamese",
      "Polish", "Ukrainian", "Dutch", "Thai", "Persian"
    ]

  categories = [
    {
      "category": "Technology",
      "types": ["Programming", "Networking", "Cybersecurity", "Database Management", "Cloud Computing", "DevOps"]
    },
    {
      "category": "Health & Fitness",
      "types": ["Yoga", "Pilates", "Cardio", "Strength Training", "Nutrition", "Meditation"]
    },
    {
      "category": "Cooking",
      "types": ["Italian Cuisine", "Asian Cuisine", "Baking", "Grilling", "Vegetarian", "Vegan"]
    },
    {
      "category": "Science",
      "types": ["Biology", "Chemistry", "Physics", "Astronomy", "Environmental Science", "Psychology"]
    },
    {
      "category": "Personal Development",
      "types": ["Time Management", "Goal Setting", "Leadership", "Communication Skills", "Mindfulness"]
    }
  ]
  selectedCategory: string = "Technology";
  selectedType: string = "Programming";
  selectedCategoryTypes: any[] | undefined;
  
  onCategoryChange() {
    const selectedCategoryObj = this.categories.find(cat => cat.category === this.form.value.coursesCatagory);
    this.selectedCategoryTypes = selectedCategoryObj ? selectedCategoryObj.types : [];
  }
  courseNameValidLabel = ""
  courseNameValid = false;
  couresDescriptionValidLabel = ""
  couresDescriptionValid = false
  couresValueValidLabel = ""
  couresValueValid = false;

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
  selectedImage: string | ArrayBuffer | null = null;
  loadingProgress: number | null = null;
  timeRemaining: any | null = null;
  timeRemainingFormatted: string = '';
  showImagePreview = false;
selectfile:any
  toggleImagePreview() {
    this.showImagePreview = !this.showImagePreview;
    this.toggleBodyScrolling(!this.showImagePreview); // Enable/disable scrolling
  }
  toggleBodyScrolling(enable: boolean) {
    if (enable) {
      document.body.style.overflow = 'auto'; // Enable scrolling
    } else {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    }
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader: FileReader = new FileReader();

    if (file) {
      const maxSize = 3 * 1024 * 1024;
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!allowedTypes.includes(file.type)) {
        alert('Only image files (JPEG, PNG, GIF) are allowed.');
        event.target.value = ''; 
        return;
      }
      if (file.size > maxSize) {
        alert('File size exceeds 3 MB limit.');
        event.target.value = ''; 
        return;
      }
      this.selectfile=file;
      reader.onprogress = (e: ProgressEvent<FileReader>) => {
        if (e.lengthComputable) {
          this.loadingProgress = (e.loaded / e.total) * 100;
          const bytesLoaded = e.loaded;
          const totalBytes = e.total;
          const remainingBytes = totalBytes - bytesLoaded;
          const currentSpeed = bytesLoaded / (e.timeStamp / 1000);
          this.timeRemaining = remainingBytes / currentSpeed;
      
          // Format the loading progress
          this.loadingProgress = Math.round(this.loadingProgress * 10) / 10; // Round to one decimal place
      
          // Convert timeRemaining to seconds
          const timeInSeconds = Math.round(this.timeRemaining);
          const minutes = Math.floor(timeInSeconds / 60);
          const seconds = timeInSeconds % 60;
          this.timeRemainingFormatted = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
      };
      
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
        this.loadingProgress = null; // Reset progress after image is loaded
        this.timeRemaining = null;

      };
      reader.readAsDataURL(file);

    }
  }
  
  
  usersDatalocal: any = localStorage.getItem("user");
  insertCourse(file: any) {

    if (this.form.get("couresName").hasError("required")) {
      this.courseNameValidLabel = "This filed is required";
      this.courseNameValid = false
    }
    else if (this.form.get("couresName").hasError("minlength")) {
      this.courseNameValidLabel = "Name must be between 4-50";
      this.courseNameValid = false

    }
    else if (this.form.get("couresName").hasError("maxlength")) {
      this.courseNameValidLabel = "Name must be between 4-50";
      this.courseNameValid = false
    }
    else {
      this.courseNameValidLabel = "";
      this.courseNameValid = true

    }

    if (this.form.get("couresDescription").hasError("required")) {
      this.couresDescriptionValidLabel = "This filed is required"
      this.couresDescriptionValid = false;
    }
    else if (this.form.get("couresDescription").hasError("minlength")) {
      this.couresDescriptionValidLabel = "coures Description must be between 16-200"
      this.couresDescriptionValid = false;
      
    }
    else if (this.form.get("couresDescription").hasError("maxlength")) {
      this.couresDescriptionValidLabel = "coures Description must be between 16-200"
      this.couresDescriptionValid = false;
    }
    else {
     this.couresDescriptionValidLabel = ""
      this.couresDescriptionValid = true;
    }
    if (this.form.get("couresValue").hasError("required")) {
      this.couresValueValidLabel = "if the course is free write 0"
      this.couresValueValid = false
    }
    else if (this.form.get("couresValue").hasError("min")) {
      this.couresValueValidLabel = "coures Value must be between 0-999"
      this.couresValueValid = false

    }
    else if (this.form.get("couresValue").hasError("max")) {
      this.couresValueValidLabel = "coures Value must be between 0-999"
      this.couresValueValid = false

    }

    else {
      this.couresValueValidLabel = ""
      this.couresValueValid = true
    }

    if (this.form.valid) {
      this.isLoading=true
      if (this.usersDatalocal && this.usersDatalocal.length > 0) {
        var userid = JSON.parse(this.usersDatalocal!).id;
        var token = JSON.parse(this.usersDatalocal!).usertoken;

        let course = {
          couresName: this.form.get("couresName").value,
          couresDescription: this.form.get("couresDescription").value,
          couresType: this.form.get("couresType").value,
          coursesCatagory: this.form.get("coursesCatagory").value,
          couresLanguage: this.form.get("couresLanguage").value,
          couresValue: this.form.get("couresValue").value,
          usersId: userid,
          pictures: "https://res.cloudinary.com/dolmafyz2/image/upload/v1713007441/jsnplpujnxbw9offwblm.png",
          "token":token
        }

        this.services.insertCourse(course).subscribe((response: any) => {
          console.log(response)
          if (this.selectfile) {
        
            this.services.uploadcourseImage(userid, token, response.courseId, this.selectfile).subscribe((response) => {
              this.isLoading=false

              Swal.fire({
                title: "Success",
                text: "insert done",
                icon: "success"
              });     
              this.router.navigate(["/company"])
              this.form.reset()
            }
              , (error) => {
                this.isLoading=false
                console.log(error)
              })
          }
          else{
            this.isLoading=false

          Swal.fire({
            title: "Success",
            text: "insert done",
            icon: "success"
          });        
          this.router.navigate(["/company"])
          this.form.reset()
          
        }},
          (error) => {
            this.isLoading=false

            Swal.fire({
              title: "Error",
              text: "something wrong",
              icon: "error"
            });    
          }
        )
      }
    }
    else {
      this.isLoading=false

    }
  }
}
