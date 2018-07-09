import { Injectable } from '@angular/core';

@Injectable()
export class NavService {
public courses;

  constructor() {
    this.courses = [
      {
        id: 1,
        description: 'Angular 2 for Beginners'
      },
      {
        id: 2,
        description: 'Angular 2 HTTP'
      },
      {
        id: 3,
        description: 'Angular 2 Forms'
      },
      {
        id: 4,
        description: 'Angular 2 Router',
        pro: true
      },
    ];
  }



}
