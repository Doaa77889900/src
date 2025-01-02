import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOfComputerComponent } from './basic-of-computer.component';

describe('BasicOfComputerComponent', () => {
  let component: BasicOfComputerComponent;
  let fixture: ComponentFixture<BasicOfComputerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicOfComputerComponent]
    });
    fixture = TestBed.createComponent(BasicOfComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
