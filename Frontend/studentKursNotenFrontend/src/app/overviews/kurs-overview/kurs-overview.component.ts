import { Component, OnInit } from '@angular/core';
import {Kurs} from "../../entities/kurs.model";
import {KursService} from "../../services/kurs.service";

@Component({
  selector: 'app-kurs-overview',
  templateUrl: './kurs-overview.component.html',
  styleUrls: ['./kurs-overview.component.css']
})
export class KursOverviewComponent implements OnInit {

  kurse?: Kurs[]

  editedKurs?: Kurs

  isFormOpen: boolean = false;

  constructor(
    private studentService: KursService,
    // private router: Router
  ) {
  }

  ngOnInit(): void {
    this.studentService.getAllKurse().subscribe(kurse => this.kurse = kurse)
  }

  toggleForm() {
    this.isFormOpen = !this.isFormOpen
  }

  deleteKurs(id: number): void {
    this.studentService.deleteKurs(id).subscribe(() => {
      this.kurse = this.kurse?.filter(student => student.id != id)
    })
  }

  editKurs(id: number) {
    this.isFormOpen = true
    this.editedKurs = this.kurse?.find(student => student.id === id)
  }

  createKurs(student: Kurs) {
    this.kurse?.push(student)
    this.isFormOpen = false;
  }

  updateKurs(updatedKurs: Kurs) {
    this.kurse = this.kurse?.map(student => {
      if (student.id === updatedKurs.id ) {
        return updatedKurs;
      } else {
        return student;
      }
    })
    // this.router.navigate(['/detail', updatedKurs.id])
    this.isFormOpen = false;
  }

}
