import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.css']
})
export class AdminContactComponent {
  usersDatalocal: any = localStorage.getItem("user");
  concats: any = []; // Initialize as an empty array
  activeIndex: number | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    if (this.usersDatalocal && this.usersDatalocal.length > 0) {
      var userid = JSON.parse(this.usersDatalocal).id;
      var token = JSON.parse(this.usersDatalocal).usertoken;
      
      const request = {
        "id": userid,
        "token": token,
      };
      
      const url = `https://corzacademy.runasp.net/api/Users/get contact`;
      
      this.http.post(url, request).subscribe((response: any) => {
        this.concats = response;
        console.log(this.concats);
      });
    }
  }

  setActive(index: number) {
    this.activeIndex = index;
  }

  resetActive() {
    this.activeIndex = null;
  }

  makeItDone(contactId: number, index: number) {
    // Simulating API call with user ID and token
    if (this.usersDatalocal && this.usersDatalocal.length > 0) {
      const userid = JSON.parse(this.usersDatalocal).id;
      const token = JSON.parse(this.usersDatalocal).usertoken;
      
      const request = {
        id: userid,
        token: token,
        contactId: contactId // Sending contactId to mark as done
      };
      
      const url = `https://corzacademy.runasp.net/api/Users/makeItDone`;
      
      this.http.post(url, request).subscribe((response: any) => {
        this.concats[index].done = true; 
      });
    }
  }

}
