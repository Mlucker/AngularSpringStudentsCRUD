import {Spind} from "./spind";

export interface Student {

  id?: number;
  nachname: string;
  vorname: string;
  geburtsdatum: Date;
  spind?: Spind;
}
