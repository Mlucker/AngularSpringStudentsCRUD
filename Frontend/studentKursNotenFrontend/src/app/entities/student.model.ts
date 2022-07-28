import {Kurs} from "./kurs.model";
import {Note} from "./note.model";

export interface Student {
  id?: number;
  nachname: string;
  vorname: string;
  geburtsdatum: Date;
  kurse: Kurs[];
  noten: Note[];

}
