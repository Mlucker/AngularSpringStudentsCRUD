import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../services/student.service";
import {Student} from "../../models/student";
import { StudiengangService } from 'src/app/services/studiengang.service';

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
    // private router: Router
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
    // this.router.navigate(['/detail', updatedStudent.id])
    this.isFormOpen = false;
  }

}
