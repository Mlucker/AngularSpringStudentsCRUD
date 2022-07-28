import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from "../../entities/note.model";
import {NoteService} from "../../services/note.service";

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {

  @Input() note?: Note;

  @Output() deleteEvent = new EventEmitter<number>();

  @Output() editEvent = new EventEmitter<number>();

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
  }

  deleteNote() {
    this.deleteEvent.emit(this.note?.id)
  }

  editNote() {
    this.editEvent.emit(this.note?.id)
  }
}
