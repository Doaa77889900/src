import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRoadComponent } from './home-road.component';

describe('HomeRoadComponent', () => {
  let component: HomeRoadComponent;
  let fixture: ComponentFixture<HomeRoadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeRoadComponent]
    });
    fixture = TestBed.createComponent(HomeRoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
