import { Component } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {
  role="/user"
  constructor(){
  
  }
  accordions: { title: string, content: string, active: boolean }[] = [
    { title: 'How to enrol in a company?', content: '1) Go to coumpany Page<br>2) Join the company you want to train in it<br>3) Click on Join Company<br>', active: false },
    { title: 'How to filter the company?', content: '1) Go to companies Page<br>2) Click on the Filter Button<br>3)Select the filter.', active: false },
   

    // Add more accordion items as needed
];


  toggleAccordion(index: number): void {
    this.accordions[index].active = !this.accordions[index].active;
  }
}
