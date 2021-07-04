import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  //selector: 'app-course-list',
  templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnInit {
  _courses: Course[] = [];
  filteredCourse: Course[] = [];
  _filterBy: string = '';

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void {
    this.courseService.retrieveAll().subscribe({
      next: (courses) => {
        this._courses = courses;
        this.filteredCourse = this._courses;
      },
      error: (error) => console.log(error),
    });
  }

  deleteById(courseId: number): void{
    this.courseService.deleteById(courseId).subscribe({
      next: () => {
        console.log("Successfully deleted");
        this.retrieveAll();
      },
      error: error => console.log(error)
    })
  }

  set filter(value: string) {
    this._filterBy = value;
    this.filteredCourse = this._courses.filter(
      (course: Course) =>
        course.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1
    );
  }

  get filter() {
    return this._filterBy;
  }
}
