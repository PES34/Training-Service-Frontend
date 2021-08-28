import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Course } from '../../model/course';
import { CourseService } from '../../service/course.service';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  course: Course[] = [];
  @Input() name: string = '';

  private patternEmail: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  mailForm = new FormGroup({
    emailAddress: new FormControl("", [
      Validators.required,
      Validators.pattern(this.patternEmail)
    ])
  });

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.getCourseList(this.name).subscribe(data => {
      this.course = data.results;
    });
  }

  convertDurationToTime = (item: number) => item * 1000;

}
