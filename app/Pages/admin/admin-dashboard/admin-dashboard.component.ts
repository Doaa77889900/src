import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { PaginationServiceService } from 'src/app/pagination-service.service';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  usersDatalocal: any = localStorage.getItem("user");
  view: [number, number] = [0, 400]; // Initial view width is 0, will be set dynamically
  chartData: any[] = [];
  pieChartData: any[] = [];
  colorScheme: Color = {
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#E44D25','#A44D25','#E44A25','#EAAD25']
  };

  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Date';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Enrollment Value';

  @ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef;



  ngOnInit() {
    this.setChartView();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setChartView();
  }

  setChartView() {
    const width = this.chartContainer.nativeElement.offsetWidth;
    this.view = [width, 400];
  }

  

  AdminData:any={roles:[{userCount:0},{userCount:0},{userCount:0}]};
constructor(private http:HttpClient){
  if (this.usersDatalocal && this.usersDatalocal.length > 0) {
    var userid = JSON.parse(this.usersDatalocal!).id;
    var token = JSON.parse(this.usersDatalocal!).usertoken;
    const request={
      "id":userid,
      "token":token
    }
    const url=`https://corzacademy.runasp.net/api/Users/get all users and teacher`
  this.http.post(url,request).subscribe((response:any)=>{
    this.usersData=response.users
    this.originalUsersData=response.users
  this.teachersData=response.teacher
  this.originalTeachersData=response.teacher
  })

  const url2=`https://corzacademy.runasp.net/api/Users/getData`
  this.http.post(url2,{"id":userid,"token":token}).subscribe((response:any)=>{
    this.pieChartData=response.pieChartData
    this.AdminData=response
    this.chartData = [
      {
        name: 'Enrollments',
        series: response.summaries.map((summary:any) => ({
          name: new Date(summary.date).toLocaleDateString(),
          value: summary.totalEnrollments
        }))
      }
    ];

  })}
}

usersData: any[] = [];
teachersData: any[] = [];
originalUsersData: any;
originalTeachersData: any;
currentPageUsers = 1;
currentPageTeachers = 1;
pageSize = 5;



get totalUsersPages(): number {
  return Math.ceil(this.usersData.length / this.pageSize);
}

get totalTeachersPages(): number {
  return Math.ceil(this.teachersData.length / this.pageSize);
}

get currentPageUsersData(): any[] {
  
  const startIndex = (this.currentPageUsers - 1) * this.pageSize;
  const endIndex = Math.min(startIndex + this.pageSize, this.usersData.length);
  return this.usersData.slice(startIndex, endIndex);
}

get currentPageTeachersData(): any[] {
  const startIndex = (this.currentPageTeachers - 1) * this.pageSize;
  const endIndex = Math.min(startIndex + this.pageSize, this.teachersData.length);
  return this.teachersData.slice(startIndex, endIndex);
}

get usersPageNumbers(): number[] {
  return Array.from({ length: this.totalUsersPages }, (_, index) => index + 1);
}

get teachersPageNumbers(): number[] {
  return Array.from({ length: this.totalTeachersPages }, (_, index) => index + 1);
}

nextUsersPage(): void {
  if (this.currentPageUsers < this.totalUsersPages) {
    this.currentPageUsers++;
  }
}

prevUsersPage(): void {
  if (this.currentPageUsers > 1) {
    this.currentPageUsers--;
  }
}

nextTeachersPage(): void {
  if (this.currentPageTeachers < this.totalTeachersPages) {
    this.currentPageTeachers++;
  }
}

prevTeachersPage(): void {
  if (this.currentPageTeachers > 1) {
    this.currentPageTeachers--;
  }
}

goToUsersPage(pageNumber: number): void {
  this.currentPageUsers = pageNumber;
}

goToTeachersPage(pageNumber: number): void {
  this.currentPageTeachers = pageNumber;
}

searchUsers(value: string): void {
  this.usersData = this.originalUsersData.filter((user: any) => user.userName.includes(value));
}

searchTeachers(value: string): void {
  this.teachersData = this.originalTeachersData.filter((teacher: any) => teacher.userName.includes(value));
}


deletedUser(userId:string,type:boolean){
  Swal.fire({
    title: 'Do you want to delete this comment?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Yes',
    denyButtonText: 'No',
  }).then((result) => {
    if (result.isConfirmed) {
      if (this.usersDatalocal && this.usersDatalocal.length > 0) {
        var userid = JSON.parse(this.usersDatalocal!).id;
        var token = JSON.parse(this.usersDatalocal!).usertoken;
        const request={
          "id":userid,
          "token":token,
          "userId":userId
        }
        const url=`https://corzacademy.runasp.net/api/Users/delete user`
        this.http.post(url,request).subscribe((response:any)=>{
          Swal.fire({
            title: "Success",
            text: "deleted done",
            icon: "success"
          })
          if(type){
          this.usersData = this.usersData.filter(user => user.id !== userId);
        }
        else{
          this.teachersData = this.teachersData.filter(user => user.id !== userId);

        }
        },(error)=>{
          console.log(error)
        })  
      
      }

    }})
 
}
}