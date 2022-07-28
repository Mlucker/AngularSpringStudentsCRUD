import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from "../../models/student";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Studiengang} from "../../models/studiengang";
import {StudentService} from "../../services/student.service";
import {StudiengangService} from "../../services/studiengang.service";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  studentForm?: FormGroup;

  studiengaenge?: Studiengang[];

  studiengang?: Studiengang;

  isStudentJsonOpen: boolean = false;

  @Output() createEvent = new EventEmitter<Student>()
  @Output() updateEvent = new EventEmitter<Student>()

  @Input() editedStudent?: Student

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private studiengangService: StudiengangService
  ) {
  }

  ngOnInit(): void {
    if (this.editedStudent) {
      this.studentForm = this.formBuilder.group({
        nachname: [this.editedStudent.nachname],
        vorname: [this.editedStudent.vorname],
        geburtsdatum: [this.editedStudent.geburtsdatum],
        studiengang: [this.editedStudent.studiengang || null],
      })
    } else {
      this.studentForm = this.formBuilder.group({
        nachname: [],
        vorname: [],
        geburtsdatum: [],
        studiengang: [],
      })
    }
    this.getAllStudiengaenge();
  }
  
  getAllStudiengaenge() {
    this.studiengangService.getAllStudiengaenge().subscribe(studiengaenge => this.studiengaenge = studiengaenge);
  }

  createStudent() {
    if (this.editedStudent) {
      const student: Student = this.studentForm?.value
      student.id = this.editedStudent.id
      this.studentService.updateStudent(student)
        .subscribe(student => this.updateEvent.emit(student))
      this.refresh()
    } else {
      this.studentService.createStudent(this.studentForm?.value)
        .subscribe(student => this.createEvent.emit(student))
      this.refresh()
    }
  }

  toggleStudentJson() {
    this.isStudentJsonOpen = !this.isStudentJsonOpen
  }

  refresh(): void {
    window.location.reload();
  }

}
