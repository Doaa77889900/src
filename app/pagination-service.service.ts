import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationServiceService {

  constructor() { }

  paginate(array: any[], pageSize: number, pageNumber: number): any[] {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  }


}
