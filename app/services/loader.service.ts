import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();
  private loadingAppSubject = new BehaviorSubject<boolean>(false);
  loadingApp$ = this.loadingAppSubject.asObservable();
  constructor() { }

  showLoader(): void {
    this.loadingSubject.next(true);
    this.loadingAppSubject.next(true);
  }

  hideLoader(): void {
    this.loadingSubject.next(false);
    this.loadingAppSubject.next(false);

  }
}
