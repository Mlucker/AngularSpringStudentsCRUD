import {Student} from "./student";

export interface Kurs {

  id?: number;
  kurs: string;
  students: Student[];
}
