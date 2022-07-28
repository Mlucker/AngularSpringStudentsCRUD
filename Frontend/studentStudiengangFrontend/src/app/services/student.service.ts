import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "../models/student";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:8080/api'

  constructor(private httpClient: HttpClient) {}

  getAllStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${this.baseUrl}/student`);
  }

  getStudentById(id: number): Observable<Student> {
    return this.httpClient.get<Student>(`${this.baseUrl}/student/${id}`)
  }

  createStudent(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(`${this.baseUrl}/student`, student)
  }

  updateStudent(student: Student): Observable<Student> {
    return this.httpClient.put<Student>(`${this.baseUrl}/student`, student)
  }

  deleteStudent(id?: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/student/${id}`)
  }
}
