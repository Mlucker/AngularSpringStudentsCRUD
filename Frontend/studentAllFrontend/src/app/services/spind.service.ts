import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Spind} from "../entities/spind.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SpindService {

  private baseUrl = 'http://localhost:8080/api'

  constructor(private httpClient: HttpClient) { }

  getAllSpinde(): Observable<Spind[]> {
    return this.httpClient.get<Spind[]>(`${this.baseUrl}/spind`);
  }

  getSpindById(id: number): Observable<Spind> {
    return this.httpClient.get<Spind>(`${this.baseUrl}/spind/${id}`)
  }

  createSpind(spind: Spind): Observable<Spind> {
    return this.httpClient.post<Spind>(`${this.baseUrl}/spind`, spind)
  }

  updateSpind(spind: Spind): Observable<Spind> {
    return this.httpClient.put<Spind>(`${this.baseUrl}/spind`, spind)
  }

  deleteSpind(id?: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/spind/${id}`)
  }
}
