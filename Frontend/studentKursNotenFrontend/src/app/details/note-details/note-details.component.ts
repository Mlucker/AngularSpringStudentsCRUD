import { Component, OnInit } from '@angular/core';
import {Note} from "../../entities/note.model";
import {ActivatedRoute} from "@angular/router";
import {NoteService} from "../../services/note.service";

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {

  note?: Note

  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService
  ) {
  }

  ngOnInit(): void {
    this.getNoteById()
  }

  getNoteById() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.noteService.getNoteById(Number.parseInt(id))
        .subscribe(note => this.note = note)
    }
  }

}

