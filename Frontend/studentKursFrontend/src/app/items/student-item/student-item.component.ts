import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from "../../models/student";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.css']
})
export class StudentItemComponent implements OnInit {

  @Input() student?: Student;

  @Output() deleteEvent = new EventEmitter<number>();

  @Output() editEvent = new EventEmitter<number>();

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

  deleteStudent() {
    this.deleteEvent.emit(this.student?.id)
  }

  editStudent() {
    this.editEvent.emit(this.student?.id)
  }
}
