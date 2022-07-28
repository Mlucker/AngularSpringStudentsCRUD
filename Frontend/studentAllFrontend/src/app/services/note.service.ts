import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Note} from "../entities/note.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private baseUrl = 'http://localhost:8080/api'

  constructor(private httpClient: HttpClient) {}

  getAllNoten(): Observable<Note[]> {
    return this.httpClient.get<Note[]>(`${this.baseUrl}/note`);
  }

  getNoteById(id: number): Observable<Note> {
    return this.httpClient.get<Note>(`${this.baseUrl}/note/${id}`)
  }

  createNote(note: Note): Observable<Note> {
    return this.httpClient.post<Note>(`${this.baseUrl}/note`, note)
  }

  updateNote(note: Note): Observable<Note> {
    return this.httpClient.put<Note>(`${this.baseUrl}/note`, note)
  }

  deleteNote(id?: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/note/${id}`)
  }
}
