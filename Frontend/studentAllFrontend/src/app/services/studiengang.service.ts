import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Studiengang} from "../entities/studiengang.model";

@Injectable({
  providedIn: 'root'
})
export class StudiengangService {

  private baseUrl = 'http://localhost:8080/api'

  constructor(private httpClient: HttpClient) {}

  getAllStudiengaenge(): Observable<Studiengang[]> {
    return this.httpClient.get<Studiengang[]>(`${this.baseUrl}/studiengang`);
  }

  getStudiengangById(id: number): Observable<Studiengang> {
    return this.httpClient.get<Studiengang>(`${this.baseUrl}/studiengang/${id}`)
  }

  createStudiengang(studiengang: Studiengang): Observable<Studiengang> {
    return this.httpClient.post<Studiengang>(`${this.baseUrl}/studiengang`, studiengang)
  }

  updateStudiengang(studiengang: Studiengang): Observable<Studiengang> {
    return this.httpClient.put<Studiengang>(`${this.baseUrl}/studiengang`, studiengang)
  }

  deleteStudiengang(id?: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/studiengang/${id}`)
  }
}
