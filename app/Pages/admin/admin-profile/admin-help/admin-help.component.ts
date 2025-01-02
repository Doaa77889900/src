import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-help',
  templateUrl: './admin-help.component.html',
  styleUrls: ['./admin-help.component.css']
})
export class AdminHelpComponent {
  accordions: { title: string, content: string, active: boolean }[] = [
    { title: 'Accordion 1', content: 'Content 1', active: false },
    { title: 'Accordion 2', content: 'Content 2', active: false },
    // Add more accordion items as needed
  ];

  toggleAccordion(index: number): void {
    this.accordions[index].active = !this.accordions[index].active;
  }
}
