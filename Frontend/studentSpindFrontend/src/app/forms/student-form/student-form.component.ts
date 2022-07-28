import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Spind} from "../../models/spind";
import {Student} from "../../models/student";
import {StudentService} from "../../services/student.service";
import {SpindService} from "../../services/spind.service";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  studentForm?: FormGroup;

  spinde?: Spind[];

  pipedSpinde? = new Array();

  isStudentJsonOpen: boolean = false;

  @Output() createEvent = new EventEmitter<Student>()
  @Output() updateEvent = new EventEmitter<Student>()

  @Input() editedStudent?: Student

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private spindService: SpindService
  ) {
  }

  ngOnInit(): void {
    if (this.editedStudent) {
      this.studentForm = this.formBuilder.group({
        nachname: [this.editedStudent.nachname],
        vorname: [this.editedStudent.vorname],
        geburtsdatum: [this.editedStudent.geburtsdatum],
        spind: [this.editedStudent.spind]

      })
    } else {
      this.studentForm = this.formBuilder.group({
        nachname: [],
        vorname: [],
        geburtsdatum: [],
        spind: []

      })
    }
    this.getAllSpinde();
    this.getAllSpindePiped();
  }

  getAllSpinde() {
    this.spindService.getAllSpinde().subscribe(spinde => this.spinde = spinde)
  }

  getAllSpindePiped() {
    this.spindService.getAllSpinde().pipe().subscribe(spinde => this.pipedSpinde = spinde)
  }

  createStudent() {
    if (this.editedStudent) {
      const student: Student = this.studentForm?.value
      student.id = this.editedStudent.id
      this.studentService.updateStudent(student)
        .subscribe(student => this.updateEvent.emit(student))
      this.refresh();
    } else {
      this.studentService.createStudent(this.studentForm?.value)
        .subscribe(student => this.createEvent.emit(student))
      this.refresh();
    }
  }

  createUnusedSpindeArray() {
    let unusedSpindeArray = new Array();
    if (this.pipedSpinde) {
      for (let pipedSpind of this.pipedSpinde) {
        if (!pipedSpind.student)
          unusedSpindeArray.push(pipedSpind);
      }
      return unusedSpindeArray;
    } else {
      unusedSpindeArray = [];
      return unusedSpindeArray;
    }
  }

  toggleStudentJson() {
    this.isStudentJsonOpen = !this.isStudentJsonOpen;
  }

  refresh(): void {
    window.location.reload();
  }

}
