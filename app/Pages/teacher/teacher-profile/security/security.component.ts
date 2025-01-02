import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicesService } from 'src/app/services/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent {
  imageUrl: string | undefined;
  usersDatalocal: any = localStorage.getItem("user");
  userData:any={}
  subscription:Subscription|undefined;
  isLoading=true;

  constructor(private services:ServicesService,private router:Router){
    
    if (this.usersDatalocal && this.usersDatalocal.length > 0) {
      var userid = JSON.parse(this.usersDatalocal!).id;
      var token = JSON.parse(this.usersDatalocal!).usertoken;
      this.subscription = this.services.getUserInformation(userid,token).subscribe((response)=>{
    this.userData=response
    console.log(response)

    this.imageUrl=this.userData.usersPictrues;
    this.isLoading=false;
  },(error)=>{
  this.router.navigate(["/signin"])
  this.isLoading=false;
  })
    }

  }
  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe()
    }
  }
  requestEmailChange() {
    console.log(this.userData);
        this.services.requestEmailChange(this.userData.userEmail).subscribe((response:any) => {
          Swal.fire({
            title: "Success",
            text: response.message,
            icon: "success"
          });  
    }, error => {
      console.log(error)
    });
  }

  requestPasswrodChange(){
    this.services.requestPasswordChange(this.userData.userEmail).subscribe((response:any)=>{
      Swal.fire({
        title: "Success",
        text: response.message,
        icon: "success"
      });  
    })
  }

}