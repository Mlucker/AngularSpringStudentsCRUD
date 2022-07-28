import { Component, OnInit } from '@angular/core';
import {Studiengang} from "../../entities/studiengang.model";
import {ActivatedRoute} from "@angular/router";
import {StudiengangService} from "../../services/studiengang.service";

@Component({
  selector: 'app-studiengang-details',
  templateUrl: './studiengang-details.component.html',
  styleUrls: ['./studiengang-details.component.css']
})
export class StudiengangDetailsComponent implements OnInit {

  studiengang?: Studiengang

  pipedStudiengang?: Studiengang;

  constructor(
    private route: ActivatedRoute,
    private studiengangService: StudiengangService
  ) {
  }

  ngOnInit(): void {
    this.getStudiengangById();
  }

  getStudiengangById() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.studiengangService.getStudiengangById(Number.parseInt(id))
        .subscribe(studiengang => this.studiengang = studiengang);
    }
  }

  returnTrueIfStudiengangHasStudents() {
    if (this.studiengang?.students) {
      if (this.studiengang.students.length > 0)
        return true;
    }
    return false;
  }

}
