import { Component, OnInit } from '@angular/core';
import {Note} from "../../entities/note.model";
import {NoteService} from "../../services/note.service";

@Component({
  selector: 'app-note-overview',
  templateUrl: './note-overview.component.html',
  styleUrls: ['./note-overview.component.css']
})
export class NoteOverviewComponent implements OnInit {

  noten?: Note[]

  editedNote?: Note

  isFormOpen: boolean = false;

  constructor(
    private studentService: NoteService,
    // private router: Router
  ) {
  }

  ngOnInit(): void {
    this.studentService.getAllNoten().subscribe(noten => this.noten = noten)
  }

  toggleForm() {
    this.isFormOpen = !this.isFormOpen
  }

  deleteNote(id: number): void {
    this.studentService.deleteNote(id).subscribe(() => {
      this.noten = this.noten?.filter(student => student.id != id)
    })
  }

  editNote(id: number) {
    this.isFormOpen = true
    this.editedNote = this.noten?.find(student => student.id === id)
  }

  createNote(student: Note) {
    this.noten?.push(student)
    this.isFormOpen = false;
  }

  updateNote(updatedNote: Note) {
    this.noten = this.noten?.map(student => {
      if (student.id === updatedNote.id ) {
        return updatedNote;
      } else {
        return student;
      }
    })
    // this.router.navigate(['/detail', updatedNote.id])
    this.isFormOpen = false;
  }

}
