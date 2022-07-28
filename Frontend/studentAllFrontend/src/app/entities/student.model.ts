import {Studiengang} from "./studiengang.model";
import {Note} from "./note.model";
import {Kurs} from "./kurs.model";
import {Spind} from "./spind.model";

export interface Student {
  id?: number;
  nachname: string;
  vorname: string;
  geburtsdatum: Date;
  kurse: Kurs[];
  noten: Note[];
  studiengang: Studiengang;
  spind: Spind;

}
