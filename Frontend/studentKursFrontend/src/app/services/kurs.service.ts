import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Kurs} from "../models/kurs";

@Injectable({
  providedIn: 'root'
})
export class KursService {

  private baseUrl = 'http://localhost:8080/api'

  constructor(private httpClient: HttpClient) {}

  getAllKurse(): Observable<Kurs[]> {
    return this.httpClient.get<Kurs[]>(`${this.baseUrl}/kurs`);
  }

  getKursById(id: number): Observable<Kurs> {
    return this.httpClient.get<Kurs>(`${this.baseUrl}/kurs/${id}`)
  }

  createKurs(kurs: Kurs): Observable<Kurs> {
    return this.httpClient.post<Kurs>(`${this.baseUrl}/kurs`, kurs)
  }

  updateKurs(kurs: Kurs): Observable<Kurs> {
    return this.httpClient.put<Kurs>(`${this.baseUrl}/kurs`, kurs)
  }

  deleteKurs(id?: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/kurs/${id}`)
  }
}
