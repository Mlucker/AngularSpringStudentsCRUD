import {Student} from "./student.model";
import {Kurs} from "./kurs.model";

export interface Studiengang {

  id?: number;
  studiengang: string;
  students: Student[];
  kurse: Kurs[];
}
