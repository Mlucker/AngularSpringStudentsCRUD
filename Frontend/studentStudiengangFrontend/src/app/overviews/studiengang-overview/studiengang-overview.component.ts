import { Component, OnInit } from '@angular/core';
import {Studiengang} from "../../models/studiengang";
import {StudiengangService} from "../../services/studiengang.service";

@Component({
  selector: 'app-studiengang-overview',
  templateUrl: './studiengang-overview.component.html',
  styleUrls: ['./studiengang-overview.component.css']
})
export class StudiengangOverviewComponent implements OnInit {

  studiengaenge?: Studiengang[]

  editedStudiengang?: Studiengang

  isFormOpen: boolean = false;

  constructor(
    private studiengangService: StudiengangService,
    // private router: Router
  ) {
  }

  ngOnInit(): void {
    this.studiengangService.getAllStudiengaenge().subscribe(studiengaenge => this.studiengaenge = studiengaenge)
  }

  toggleForm() {
    this.isFormOpen = !this.isFormOpen
  }

  deleteStudiengang(id: number): void {
    this.studiengangService.deleteStudiengang(id).subscribe(() => {
      this.studiengaenge = this.studiengaenge?.filter(studiengang => studiengang.id != id)
    })
  }

  editStudiengang(id: number) {
    this.isFormOpen = true
    this.editedStudiengang = this.studiengaenge?.find(studiengang => studiengang.id === id)
  }

  createStudiengang(studiengang: Studiengang) {
    this.studiengaenge?.push(studiengang)
    this.isFormOpen = false;
  }

  updateStudiengang(updatedStudiengang: Studiengang) {
    this.studiengaenge = this.studiengaenge?.map(studiengang => {
      if (studiengang.id === updatedStudiengang.id ) {
        return updatedStudiengang;
      } else {
        return studiengang;
      }
    })
    // this.router.navigate(['/detail', updatedStudiengang.id])
    this.isFormOpen = false;
  }

}
