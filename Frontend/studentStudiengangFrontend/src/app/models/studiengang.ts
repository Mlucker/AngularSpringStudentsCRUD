import {Student} from "./student";

export interface Studiengang {

  id?: number;
  studiengang: string;
  students?: Student[];
}
