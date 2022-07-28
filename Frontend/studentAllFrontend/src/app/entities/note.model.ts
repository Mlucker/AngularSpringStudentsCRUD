import {Kurs} from "./kurs.model";
import {Student} from "./student.model";

export interface Note {

  id?: number;
  note: number;
  kurs: Kurs;
  student: Student;
}
