import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ServicesService } from './services.service';
import { LoaderService } from './loader.service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();
  private isAdminSubject = new BehaviorSubject<boolean>(false);
  isAdmin$: Observable<boolean> = this.isAdminSubject.asObservable();
  private isTeacherSubject = new BehaviorSubject<boolean>(false);
  isTeacher$: Observable<boolean> = this.isTeacherSubject.asObservable();

  constructor(private http: ServicesService, private loader: LoaderService) {
    const usersData = localStorage.getItem("user");
    if (usersData && usersData.length > 0) {
      var id = JSON.parse(usersData).id;
      var token = JSON.parse(usersData).usertoken;
      console.log(id, token);
      this.login("");
      this.loader.showLoader();
      // Show loader before making the request

      this.http.getUserRole(id, token).subscribe(
        (response) => {
          console.log(response)
          this.login(response.toString());
          this.loader.hideLoader();

          // Hide loader after request completes
        },
        (error) => {
          console.log("something wrong !");
          // Hide loader after request completes (in case of error)
        }
      );
    }
  }


  login(role: string) {
    this.isAuthenticatedSubject.next(true);
    this.isAdminSubject.next(role === 'admin');
    this.isTeacherSubject.next(role === 'teacher');
  }

  logout() {
    this.isAuthenticatedSubject.next(false);
    this.isAdminSubject.next(false);
    this.isTeacherSubject.next(false);

    const usersData = localStorage.getItem("user");
    if (usersData && usersData.length > 0) {
      const token = JSON.parse(usersData!).usertoken;

      // Call the logout method with the token included in the request body
      this.http.logout(token).subscribe(
        (response) => {
          console.log("Logout successful");
        },
        (error) => {
        }
      );
    }

    localStorage.removeItem("user");
  }


  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }
  isAdmin(): boolean {
    return this.isAdminSubject.value;
  }
  isTeacher(): boolean {
    return this.isTeacherSubject.value;
  }
}
