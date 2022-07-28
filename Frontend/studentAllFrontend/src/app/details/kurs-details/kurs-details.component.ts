import { Component, OnInit } from '@angular/core';
import {Kurs} from "../../entities/kurs.model";
import {ActivatedRoute} from "@angular/router";
import {KursService} from "../../services/kurs.service";

@Component({
  selector: 'app-kurs-details',
  templateUrl: './kurs-details.component.html',
  styleUrls: ['./kurs-details.component.css']
})
export class KursDetailsComponent implements OnInit {

  kurs?: Kurs

  constructor(
    private route: ActivatedRoute,
    private kursService: KursService
  ) {
  }

  ngOnInit(): void {
    this.getKursById()
  }

  getKursById() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.kursService.getKursById(Number.parseInt(id))
        .subscribe(kurs => this.kurs = kurs)
    }
  }

}
