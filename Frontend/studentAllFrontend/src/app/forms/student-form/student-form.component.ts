import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {Student} from "../../entities/student.model";
import {Kurs} from "../../entities/kurs.model";
import {StudentService} from "../../services/student.service";
import {KursService} from "../../services/kurs.service";
import {StudiengangService} from "../../services/studiengang.service";
import {SpindService} from "../../services/spind.service";
import {Studiengang} from "../../entities/studiengang.model";
import {Spind} from "../../entities/spind.model";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  studentForm?: FormGroup;

  kurse?: Kurs[];

  studiengaenge?: Studiengang[];

  student?: Student;

  spinde?: Spind[];

  pipedSpinde? = new Array();

  kurseFormArray?: FormArray;

  isStudentJsonOpen: boolean = false;

  @Output() createEvent = new EventEmitter<Student>()
  @Output() updateEvent = new EventEmitter<Student>()

  @Input() editedStudent?: Student

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private kursService: KursService,
    private studiengangService: StudiengangService,
    private spindService: SpindService
  ) {
  }

  ngOnInit(): void {
    if (this.editedStudent) {
      this.studentForm = this.formBuilder.group({
        nachname: [this.editedStudent.nachname],
        vorname: [this.editedStudent.vorname],
        geburtsdatum: [this.editedStudent.geburtsdatum],
        kurse: this.formBuilder.array(this.editedStudent.kurse),
        noten: this.formBuilder.array(this.editedStudent.noten),
        studiengang: [this.editedStudent.studiengang],
        spind: [this.editedStudent.spind]
      })
    } else {
      this.studentForm = this.formBuilder.group({
        nachname: [],
        vorname: [],
        geburtsdatum: [],
        kurse: this.formBuilder.array([]),
        noten: this.formBuilder.array([]),
        studiengang: [],
        spind: []
      })
    }
    this.getAllKurse();
    this.getEditedStudent();
    this.getAllSpinde();
    this.getAllSpindePiped();
    this.getAllStudiengaenge();
  }

  getAllKurse() {
    this.kursService.getAllKurse().subscribe(kurse => this.kurse = kurse);
  }

  getAllStudiengaenge() {
    this.studiengangService.getAllStudiengaenge().subscribe(studiengaenge => this.studiengaenge = studiengaenge);
  }

  getAllSpinde() {
    this.spindService.getAllSpinde().subscribe(spinde => this.spinde = spinde);
  }

  getAllSpindePiped() {
    this.spindService.getAllSpinde().pipe().subscribe(spinde => this.pipedSpinde = spinde)
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
