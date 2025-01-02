import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.component.html',
  styleUrls: ['./change-email.component.css']
})
export class ChangeEmailComponent {
  emailChangeForm: FormGroup;
  token: string|undefined;
  email: string|undefined;
  tokenVerified: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.emailChangeForm = this.fb.group({
      newEmail: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    this.token = this.route.snapshot.queryParamMap.get('token')!;
    this.email = this.route.snapshot.queryParamMap.get('email')!;
    this.verifyToken();
  }

  verifyToken(): void {
    var confierm={
      "email": this.email,
      "token": this.token
    }
    
    this.http.post('https://corzacademy.runasp.net/api/Users/verify-email-change-token',confierm)
      .subscribe(
        response => {
          this.tokenVerified = true;
        },
        error => {
          alert('Invalid or expired token.');
          this.router.navigate(['/']);
        }
      );
  }

  onSubmit(): void {
    if (this.emailChangeForm.valid) {
      const newEmail = this.emailChangeForm.value.newEmail;
      var changeEmail={
        "email": this.email,
        "token": this.token,
        "newEmail": newEmail
      }
      this.http.post('https://corzacademy.runasp.net/api/Users/change-email', changeEmail)
        .subscribe(
          (response:any) => {
            Swal.fire({
              title: "success",
              text: response.message,
              icon: "success"
            });    
           this.router.navigate(['/']);
          },
          error => {
            console.log(error)
            Swal.fire({
              title: "success",
              text: error.error,
              icon: "success"
            });    
          }
        );
    }
  }
}