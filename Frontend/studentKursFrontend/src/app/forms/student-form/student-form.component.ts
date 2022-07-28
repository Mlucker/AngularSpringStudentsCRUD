import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Student} from "../../models/student";
import {StudentService} from "../../services/student.service";
import {Kurs} from "../../models/kurs";
import {KursService} from "../../services/kurs.service";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  studentForm?: FormGroup;

  kurse?: Kurs[];

  student?: Student;

  kurseFormArray?: FormArray;

  isStudentJsonOpen: boolean = false;

  @Output() createEvent = new EventEmitter<Student>()
  @Output() updateEvent = new EventEmitter<Student>()

  @Input() editedStudent?: Student

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private kursService: KursService,
  ) {
  }

  ngOnInit(): void {
    if (this.editedStudent) {
      this.studentForm = this.formBuilder.group({
        nachname: [this.editedStudent.nachname],
        vorname: [this.editedStudent.vorname],
        geburtsdatum: [this.editedStudent.geburtsdatum],
        kurse: this.formBuilder.array(this.editedStudent.kurse)
      })
    } else {
      this.studentForm = this.formBuilder.group({
        nachname: [],
        vorname: [],
        geburtsdatum: [],
        kurse: this.formBuilder.array([])
      })
    }
    this.getAllKurse();
    this.getEditedStudent();
  }

  getAllKurse() {
    this.kursService.getAllKurse().subscribe(kurse => this.kurse = kurse);
  }

  getEditedStudent() {
    let id = this.editedStudent?.id;
    if (id) {
      this.studentService.getStudentById(id).subscribe(student => this.student = student);
    }
  }

  onCheckboxChange(event: any) {
    const kurseFormArray = (this.studentForm?.get('kurse') as FormArray);
    if (event.target.checked) {
      kurseFormArray.push(this.formBuilder.group({id: event.target.value}));
    } else if (!event.target.checked) {
      const index = kurseFormArray.controls
        .findIndex(x => x.value.id == event.target.value);
      kurseFormArray.removeAt(index);
    }
  }

  createAndReturnKurseIDArray() {
    let kurseIDArray = new Array();
    if (this.editedStudent && this.student?.kurse) {
      for (let kurs of this.student?.kurse) {
        kurseIDArray.push(kurs.id);
      }
      return kurseIDArray;
    }
    kurseIDArray = [-1];
    return kurseIDArray;
  }

  createStudent() {
    if (this.editedStudent) {
      const student: Student = this.studentForm?.value;
      student.id = this.editedStudent.id;
      this.studentService.updateStudent(student)
        .subscribe(student => this.updateEvent.emit(student));
      this.refresh();
    } else {
      this.studentService.createStudent(this.studentForm?.value)
        .subscribe(student => this.createEvent.emit(student));
      this.refresh();
    }
  }

  toggleStudentJson() {
    this.isStudentJsonOpen = !this.isStudentJsonOpen;
  }

  refresh(): void {
    window.location.reload();
  }

}
