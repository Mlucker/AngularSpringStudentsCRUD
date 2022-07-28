import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {Studiengang} from "../../entities/studiengang.model";
import {StudiengangService} from "../../services/studiengang.service";
import {KursService} from "../../services/kurs.service";
import {Kurs} from "../../entities/kurs.model";

@Component({
  selector: 'app-studiengang-form',
  templateUrl: './studiengang-form.component.html',
  styleUrls: ['./studiengang-form.component.css']
})
export class StudiengangFormComponent implements OnInit {

  studiengangForm?: FormGroup;

  kurse?: Kurs[];

  isStudiengangJsonOpen: boolean = false;

  studiengang?: Studiengang;

  @Output() createEvent = new EventEmitter<Studiengang>()
  @Output() updateEvent = new EventEmitter<Studiengang>()

  @Input() editedStudiengang?: Studiengang

  constructor(
    private formBuilder: FormBuilder,
    private studiengangService: StudiengangService,
    private kursService: KursService,
  ) {
  }

  ngOnInit(): void {
    if (this.editedStudiengang) {
      this.studiengangForm = this.formBuilder.group({
        studiengang: [this.editedStudiengang.studiengang],
        students: this.formBuilder.array(this.editedStudiengang.students),
        kurse: this.formBuilder.array(this.editedStudiengang.kurse),
      })
    } else {
      this.studiengangForm = this.formBuilder.group({
        studiengang: [],
        students: this.formBuilder.array([]),
        kurse: this.formBuilder.array([]),
      })
    }
    this.getAllKurse();
    this.getEditedStudiengang();
  }

  getEditedStudiengang() {
    var id = this.editedStudiengang?.id;
    if (id) {
      this.studiengangService.getStudiengangById(id)
        .subscribe(studiengang => this.studiengang = studiengang);
    }
  }

  getAllKurse() {
    this.kursService.getAllKurse().subscribe(kurse => this.kurse = kurse);
  }

  onCheckboxChange(event: any) {
    const kurseFormArray = (this.studiengangForm?.get('kurse') as FormArray);
    if (event.target.checked) {
      kurseFormArray.push(this.formBuilder.group({id: event.target.value}));
    } else {
      const index = kurseFormArray.controls
        .findIndex(x => x.value.id == event.target.value);
      kurseFormArray.removeAt(index);
    }
  }

  createAndReturnKurseIDArray() {
    let kurseIDArray = new Array();
    if (this.editedStudiengang && this.studiengang?.kurse) {
      for (let kurs of this.studiengang?.kurse) {
        kurseIDArray.push(kurs.id);
      }
      return kurseIDArray;
    }
    kurseIDArray = [-1];
    return kurseIDArray;
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
