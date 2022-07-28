import {Kurs} from "./kurs";

export interface Student {

  id?: number;
  nachname: string;
  vorname: string;
  geburtsdatum: Date;
  kurse: Kurs[];
}
