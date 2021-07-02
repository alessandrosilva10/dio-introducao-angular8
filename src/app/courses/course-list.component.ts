import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular Forms',
        imageUrl: '',
        price: 99.99,
        code: 'XPS-0000',
        duration: 120,
        rating: 40,
        releaseDate: 'November, 2, 2019'
      },
      {
        id: 2,
        name: 'Angular Forms',
        imageUrl: '',
        price: 99.99,
        code: 'XPS-0000',
        duration: 120,
        rating: 40,
        releaseDate: 'December, 2, 2019'
      },
    ];
  }
}
