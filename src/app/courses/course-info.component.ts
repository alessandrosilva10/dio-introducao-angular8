import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {
  courseId: number = 0;

  constructor(private activedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.courseId = Number(this.activedRoute.snapshot.paramMap.get('id'));
  }
}
