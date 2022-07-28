import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Studiengang} from "../../models/studiengang";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {StudiengangService} from "../../services/studiengang.service";
import {StudentService} from "../../services/student.service";
import {Student} from "../../models/student";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-studiengang-form',
  templateUrl: './studiengang-form.component.html',
  styleUrls: ['./studiengang-form.component.css']
})
export class StudiengangFormComponent implements OnInit {

  studiengangForm?: FormGroup;

  students?: Student[];

  studentsFormArray?: FormArray;

  isStudiengangJsonOpen: boolean = false;

  studiengang?: Studiengang;

  @Output() createEvent = new EventEmitter<Studiengang>()
  @Output() updateEvent = new EventEmitter<Studiengang>()

  @Input() editedStudiengang?: Studiengang

  constructor(
    private formBuilder: FormBuilder,
    private studiengangService: StudiengangService,
    private studentService: StudentService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    if (this.editedStudiengang) {
      this.studiengangForm = this.formBuilder.group({
        studiengang: [this.editedStudiengang.studiengang],
        students: this.formBuilder.array([])
      })
    } else {
      this.studiengangForm = this.formBuilder.group({
        studiengang: [],
        students: this.formBuilder.array([])
      })
    }
    this.getAllStudents();
    this.getEditedStudiengang();
  }

  getEditedStudiengang() {
    var id = this.editedStudiengang?.id;
    if (id) {
      this.studiengangService.getStudiengangById(id)
        .subscribe(studiengang => this.studiengang = studiengang);
    }
  }

  getAllStudents() {
    this.studentService.getAllStudents().subscribe(students => this.students = students);
  }

  onCheckboxChange(event: any) {
    const studentsFormArray = (this.studiengangForm?.get('students') as FormArray);
    if (event.target.checked) {
      studentsFormArray.push(this.formBuilder.group({id: event.target.value}));
    } else {
      const index = studentsFormArray.controls
        .findIndex(x => x.value.id == event.target.value);
      studentsFormArray.removeAt(index);
    }
  }

  createAndReturnStudentsIDArray() {
    var studentsIDArray = new Array();
    if (this.editedStudiengang && this.studiengang?.students) {
      for (let student of this.studiengang?.students) {
        studentsIDArray.push(student.id);
      }
      return studentsIDArray;
    } else {
      studentsIDArray = [-1];
      return studentsIDArray;
    }
  }

  createStudiengang() {
    if (this.editedStudiengang) {
      const studiengang: Studiengang = this.studiengangForm?.value
      studiengang.id = this.editedStudiengang.id
      this.studiengangService.updateStudiengang(studiengang)
        .subscribe(studiengang => this.updateEvent.emit(studiengang))
      this.refresh()
    } else {
      this.studiengangService.createStudiengang(this.studiengangForm?.value)
        .subscribe(studiengang => this.createEvent.emit(studiengang))
      this.refresh()
    }
  }

  toggleStudiengangJson() {
    this.isStudiengangJsonOpen = !this.isStudiengangJsonOpen;
  }

  refresh(): void {
    window.location.reload();
  }

}
