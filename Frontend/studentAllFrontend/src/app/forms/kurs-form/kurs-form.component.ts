import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Student} from "../../entities/student.model";
import {Kurs} from "../../entities/kurs.model";
import {KursService} from "../../services/kurs.service";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-kurs-form',
  templateUrl: './kurs-form.component.html',
  styleUrls: ['./kurs-form.component.css']
})
export class KursFormComponent implements OnInit {

  kursForm?: FormGroup;

  students?: Student[];

  kurs?: Kurs;

  isKursJsonOpen: boolean = false;

  @Output() createEvent = new EventEmitter<Kurs>()
  @Output() updateEvent = new EventEmitter<Kurs>()

  @Input() editedKurs?: Kurs

  constructor(
    private formBuilder: FormBuilder,
    private kursService: KursService,
    private studentService: StudentService,
  ) {
  }

  ngOnInit(): void {
    if (this.editedKurs) {
      this.kursForm = this.formBuilder.group({
        kursname: [this.editedKurs.kursname],
        noten: this.formBuilder.array(this.editedKurs.noten),
        students: this.formBuilder.array(this.editedKurs.students),
        studiengaenge: this.formBuilder.array(this.editedKurs.studiengaenge)
      })
    } else {
      this.kursForm = this.formBuilder.group({
        kursname: [],
        noten: this.formBuilder.array([]),
        students: this.formBuilder.array([]),
        studiengaenge: this.formBuilder.array([])
      })
    }
    this.getAllStudents();
  }

  getAllStudents() {
    this.studentService.getAllStudents().subscribe(students => this.students = students);
  }

  createKurs() {
    if (this.editedKurs) {
      const kurs: Kurs = this.kursForm?.value;
      kurs.id = this.editedKurs.id;
      this.kursService.updateKurs(kurs)
        .subscribe(kurs => this.updateEvent.emit(kurs));
      this.refresh();
    } else {
      this.kursService.createKurs(this.kursForm?.value)
        .subscribe(kurs => this.createEvent.emit(kurs));
      this.refresh();
    }
  }

  toggleKursJson() {
    this.isKursJsonOpen = !this.isKursJsonOpen;
  }

  refresh(): void {
    window.location.reload();
  }

}
