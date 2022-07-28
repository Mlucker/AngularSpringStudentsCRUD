import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Student} from "../../models/student";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  student?: Student

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {
  }

  ngOnInit(): void {
    this.getStudentById();
  }

  getStudentById() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.studentService.getStudentById(Number.parseInt(id))
        .subscribe(student => this.student = student)
    }
  }

}
