import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { CourseService } from './course.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {
  course: Course[];

  constructor(private activedRoute: ActivatedRoute, private router: Router, private courseService: CourseService){}

  save(): void{
    //this.courseService.save(this.course);
    //this.router.navigateByUrl('/courses');
    alert('Course updated successfully')
  }

  ngOnInit(): void {
    this.courseService.retrieveById(Number(this.activedRoute.snapshot.paramMap.get('id'))).subscribe({
      next: course => this.course = course,
      error: err => console.log(err)
    })
  }
}
