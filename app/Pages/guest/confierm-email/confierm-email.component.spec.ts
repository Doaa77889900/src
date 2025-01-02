import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiermEmailComponent } from './confierm-email.component';

describe('ConfiermEmailComponent', () => {
  let component: ConfiermEmailComponent;
  let fixture: ComponentFixture<ConfiermEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfiermEmailComponent]
    });
    fixture = TestBed.createComponent(ConfiermEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
