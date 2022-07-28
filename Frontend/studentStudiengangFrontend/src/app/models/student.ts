import {Studiengang} from "./studiengang";

export interface Student {

  id?: number;
  nachname: string;
  vorname: string;
  geburtsdatum: Date;
  studiengang?: Studiengang;

}
