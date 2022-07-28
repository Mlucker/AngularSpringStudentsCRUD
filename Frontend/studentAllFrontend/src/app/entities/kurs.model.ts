import {Studiengang} from "./studiengang.model";
import {Student} from "./student.model";
import {Note} from "./note.model";

export interface Kurs {

  id?: number;
  kursname: string;
  students: Student[];
  noten: Note[];
  studiengaenge: Studiengang[];
}
