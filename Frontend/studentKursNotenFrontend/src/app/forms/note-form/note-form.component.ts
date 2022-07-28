import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Kurs} from "../../entities/kurs.model";

import {KursService} from "../../services/kurs.service";
import {Note} from "../../entities/note.model";
import {NoteService} from "../../services/note.service";
import {StudentService} from "../../services/student.service";
import {Student} from "../../entities/student.model";

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {

  noteForm?: FormGroup;

  kurse?: Kurs[];

  students?: Student[];

  note?: Note;

  kurseFormArray?: FormArray;

  isNoteJsonOpen: boolean = false;

  @Output() createEvent = new EventEmitter<Note>()
  @Output() updateEvent = new EventEmitter<Note>()

  @Input() editedNote?: Note

  constructor(
    private formBuilder: FormBuilder,
    private noteService: NoteService,
    private kursService: KursService,
    private studentService: StudentService,
  ) {
  }

  ngOnInit(): void {
    if (this.editedNote) {
      this.noteForm = this.formBuilder.group({
        note: [this.editedNote.note, [Validators.required]],
        kurs: [this.editedNote.kurs, [Validators.required]],
        student: [this.editedNote.student, [Validators.required]],
      })
    } else {
      this.noteForm = this.formBuilder.group({
        note: ['', Validators.required],
        kurs: ['', Validators.required],
        student: ['', Validators.required],
      })
    }
    this.getAllKurse();
    this.getAllStudents();
    this.getEditedNote();
  }

  getAllKurse() {
    this.kursService.getAllKurse().subscribe(kurse => this.kurse = kurse);
  }

  getAllStudents() {
    this.studentService.getAllStudents().subscribe(students => this.students = students);
  }

  getEditedNote() {
    let id = this.editedNote?.id;
    if (id) {
      this.noteService.getNoteById(id).subscribe(note => this.note = note);
    }
  }

  createNote() {
    if (this.editedNote) {
      const note: Note = this.noteForm?.value;
      note.id = this.editedNote.id;
      this.noteService.updateNote(note)
        .subscribe(note => this.updateEvent.emit(note));
      this.refresh();
    } else {
      this.noteService.createNote(this.noteForm?.value)
        .subscribe(note => this.createEvent.emit(note));
      this.refresh();
    }
  }

  toggleNoteJson() {
    this.isNoteJsonOpen = !this.isNoteJsonOpen;
  }

  refresh(): void {
    window.location.reload();
  }

  get gettingControl() {
    return this.noteForm?.controls;
  }

}
