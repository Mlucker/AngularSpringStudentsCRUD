import { Component, OnInit } from '@angular/core';
import {Spind} from "../../entities/spind.model";
import {SpindService} from "../../services/spind.service";

@Component({
  selector: 'app-spind-overview',
  templateUrl: './spind-overview.component.html',
  styleUrls: ['./spind-overview.component.css']
})
export class SpindOverviewComponent implements OnInit {

  spinde?: Spind[]

  editedSpind?: Spind

  isFormOpen: boolean = false;

  constructor(
    private spindService: SpindService,
  ) {
  }

  ngOnInit(): void {
    this.spindService.getAllSpinde().subscribe(spinde => this.spinde = spinde)
  }

  toggleForm() {
    this.isFormOpen = !this.isFormOpen
  }

  deleteSpind(id: number): void {
    this.spindService.deleteSpind(id).subscribe(() => {
      this.spinde = this.spinde?.filter(spind => spind.id != id)
    })
  }

  editSpind(id: number) {
    this.isFormOpen = true
    this.editedSpind = this.spinde?.find(spind => spind.id === id)
  }

  createSpind(spind: Spind) {
    this.spinde?.push(spind)
    this.isFormOpen = false;
  }

  updateSpind(updatedSpind: Spind) {
    this.spinde = this.spinde?.map(spind => {
      if (spind.id === updatedSpind.id ) {
        return updatedSpind;
      } else {
        return spind;
      }
    })
    this.isFormOpen = false;
  }

}
