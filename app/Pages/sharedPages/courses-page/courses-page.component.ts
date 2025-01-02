import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PaginationServiceService } from 'src/app/pagination-service.service';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css'],
  
})
export class CoursesPageComponent implements OnDestroy {
courses:any=[{teacherName:"a"}];
filtercourses:any=[{}]
isLoading=false;

filter={serach:"",sort:"eralist",filterRating:0,filterPriceMin:0,filterPriceMax:-1}

currentPage: number = 1;
itemsPerPage: number = 12;
totalItems: number=0;
totalPages: number=0;

  constructor(private http:ServicesService,private route:ActivatedRoute,private router:Router,private PagesServicse:PaginationServiceService){
    this.route.queryParams.subscribe(params => {
      const searchParam = params['search'];
      console.log('Search query parameter:', searchParam);
      if(searchParam!=null){
      this.filter.serach=searchParam
    this.searchNow=searchParam;
    }

    });
    this.getCourses();
  }
 
  getCoursesSubscription: Subscription | undefined;
  capitalizeFirstLetter(text: string): string {
    if (!text) return text;
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
  ngOnDestroy(): void {
    if (this.getCoursesSubscription) {
      this.getCoursesSubscription.unsubscribe();
    }
  }

sort(value:any){
  console.log(value)
this.filter.sort=value;
this.getCourses()
}
rating(value:any){
  this.filter.filterRating=value;
  this.getCourses()

}

price(min:any,max:any){
  
  if(min!=""){
    this.filter.filterPriceMin=min
  }
  else{
    this.filter.filterPriceMin=0}
  if(max!=""){
    this.filter.filterPriceMax=max
  }else{
    this.filter.filterPriceMax=-1

  }
 

this.getCourses()

}
searchNow=''
serach(value: string) {
  this.filter.serach = value; 
  this.router.navigate(['/compaines'], { queryParams: { 'search': value } });
  this.getCourses();
}

Reset(){
  this.filter.sort="eralist"
  this.filter.filterRating=0
  this.filter.filterPriceMin=0
  this.filter.filterPriceMax=-1
  this.getCourses()
}
getCourses(){
  this.isLoading=true

  if (this.getCoursesSubscription) {
    this.getCoursesSubscription.unsubscribe();
  }
  this.getCoursesSubscription=this.http.getcompaines(this.filter).subscribe(
    (response)=>{
      console.log(response);
      this.courses=response
      this.filtercourses=this.courses;
      this.totalItems = this.filtercourses.length;
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.currentPage=1
      this.isLoading=false

    },
    (error)=>{
      console.log(error)
    })
}
getPaginatedData(): any[] {
  return this.PagesServicse.paginate(this.filtercourses, this.itemsPerPage, this.currentPage);
}

onPageChange(pageNumber: number) {
  this.currentPage = pageNumber;
}

getPageNumbers(): number[] {
  return Array(this.totalPages).fill(0).map((x, i) => i + 1);
}
  sidebarActive = false;

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }
  toggleCollapse(collapseId: string) {
    const collapseElement = document.getElementById(collapseId);
    if (collapseElement) {
      collapseElement.classList.toggle('show');
    }
  }
}


