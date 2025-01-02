import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, HostListener } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements AfterViewInit{
  isLogin=false;
  userData=""
constructor(private http :HttpClient){
  const usersData = localStorage.getItem("user");
  if (usersData && usersData.length > 0) {
this.isLogin=true;
}
var x=1
const url = `https://corzacademy.runasp.net/api/courses/get most common courses/${x}`;
this.http.get(url).subscribe((response:any) => {
this.cards=response

})
}
  ngAfterViewInit() {
    
    const typed = new Typed('.typed', {
      strings: ['Welcome to our platform',' your bridge to top training opportunities!'],
      typeSpeed: 50,  // Adjust as needed
      backSpeed: 30,   // Speed to delete characters in reverse
      startDelay: 500,   // Delay before typing starts (milliseconds)
      backDelay: 1500,   // Delay before deleting starts (milliseconds)
     
      loop: true  // Whether to loop the animation
    });
  }
  cards:any = [{}];

  startIndex = 0;

  visibleCards =3;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateVisibleCards();
  }

  updateVisibleCards() {
    if (window.innerWidth >= 950) {
      this.visibleCards = 3; // For screen width >= 950, show 5 cards
    } else if(window.innerWidth >= 500){
      this.visibleCards = 2; // For screen width < 950, show 3 cards
    }else{
      this.visibleCards = 1
    }

    // Adjust startIndex to ensure the cards remain visible within the available range
    if (this.startIndex + this.visibleCards > this.cards.length) {
      this.startIndex = this.cards.length - this.visibleCards;
    }
  }
  prevCards() {
    if (this.startIndex > 0) {
      this.startIndex--;
    }
  }

  nextCards() {
    if (this.startIndex < this.cards.length - this.visibleCards) {
      this.startIndex++;
    }
  }



}