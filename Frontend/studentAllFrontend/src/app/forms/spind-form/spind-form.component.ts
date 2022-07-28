import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Student} from "../../entities/student.model";
import {Spind} from "../../entities/spind.model";
import {SpindService} from "../../services/spind.service";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-spind-form',
  templateUrl: './spind-form.component.html',
  styleUrls: ['./spind-form.component.css']
})
export class SpindFormComponent implements OnInit {

  spindForm?: FormGroup;

  students?: Student[];

  isSpindJsonOpen: boolean = false;

  @Output() createEvent = new EventEmitter<Spind>()
  @Output() updateEvent = new EventEmitter<Spind>()

  @Input() editedSpind?: Spind

  constructor(
    private formBuilder: FormBuilder,
    private spindService: SpindService,
    private studentService: StudentService
  ) {
  }

  ngOnInit(): void {
    if (this.editedSpind) {
      this.spindForm = this.formBuilder.group({
        spindraum: [this.editedSpind.spindraum],
        student: [this.editedSpind.student]
      })
    } else {
      this.spindForm = this.formBuilder.group({
        spindraum: [],
        student: []
      })
    }
    this.getAllStudents();
  }

  getAllStudents() {
    this.studentService.getAllStudents().subscribe(students => this.students = students);
  }

  createSpind() {
    if (this.editedSpind) {
      const spind: Spind = this.spindForm?.value
      spind.id = this.editedSpind.id
      this.spindService.updateSpind(spind)
        .subscribe(spind => this.updateEvent.emit(spind))
      this.refresh();
    } else {
      this.spindService.createSpind(this.spindForm?.value)
        .subscribe(spind => this.createEvent.emit(spind))
      this.refresh();
    }
  }

  toggleSpindJson() {
    this.isSpindJsonOpen = !this.isSpindJsonOpen;
  }

  refresh(): void {
    window.location.reload();
  }

}
