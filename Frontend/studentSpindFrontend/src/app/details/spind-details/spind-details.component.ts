import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Spind} from "../../models/spind";
import {SpindService} from "../../services/spind.service";

@Component({
  selector: 'app-spind-details',
  templateUrl: './spind-details.component.html',
  styleUrls: ['./spind-details.component.css']
})
export class SpindDetailsComponent implements OnInit {

  spind?: Spind

  constructor(
    private route: ActivatedRoute,
    private spindService: SpindService
  ) {
  }

  ngOnInit(): void {
    this.getSpindById();
  }

  getSpindById() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.spindService.getSpindById(Number.parseInt(id))
        .subscribe(spind => this.spind = spind)
    }
  }

}
