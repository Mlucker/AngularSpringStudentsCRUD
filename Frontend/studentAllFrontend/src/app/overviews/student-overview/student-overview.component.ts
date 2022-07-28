import { Component, OnInit } from '@angular/core';
import {Student} from "../../entities/student.model";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-student-overview',
  templateUrl: './student-overview.component.html',
  styleUrls: ['./student-overview.component.css']
})
export class StudentOverviewComponent implements OnInit {

  students?: Student[]

  editedStudent?: Student

  isFormOpen: boolean = false;

  constructor(
    private studentService: StudentService,
  ) {
  }

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe(students => this.students = students)
  }

  toggleForm() {
    this.isFormOpen = !this.isFormOpen
  }

  deleteStudent(id: number): void {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.students = this.students?.filter(student => student.id != id)
    })
  }

  editStudent(id: number) {
    this.isFormOpen = true
    this.editedStudent = this.students?.find(student => student.id === id)
  }

  createStudent(student: Student) {
    this.students?.push(student)
    this.isFormOpen = false;
  }

  updateStudent(updatedStudent: Student) {
    this.students = this.students?.map(student => {
      if (student.id === updatedStudent.id ) {
        return updatedStudent;
      } else {
        return student;
      }
    })
    this.isFormOpen = false;
  }

}
