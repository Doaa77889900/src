import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-confierm-email',
  templateUrl: './confierm-email.component.html',
  styleUrls: ['./confierm-email.component.css']
})
export class ConfiermEmailComponent {
  done=""
  isLoading=true;

constructor(private parms:ActivatedRoute,private http:ServicesService,private router:Router){
this.parms.params.subscribe(data=>{
  var id=data["id"];
  var token=decodeURIComponent(data['token']);;
  this.http.confiermEmail(id,token).subscribe((response:any)=>{
    this.isLoading=false;
    Swal.fire({
      title: "Success",
      text: response.message,
      icon: "success"
    }).then(()=>{
this.router.navigate(["/signin"])
    });  
  },
(error)=>{
  console.log(error)
  this.isLoading=false;
  Swal.fire({
    title: "error",
    text: error.message,
    icon: "error"
  })
})
})
}
}
