import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Spind} from "../../entities/spind.model";
import {SpindService} from "../../services/spind.service";

@Component({
  selector: 'app-spind-item',
  templateUrl: './spind-item.component.html',
  styleUrls: ['./spind-item.component.css']
})
export class SpindItemComponent implements OnInit {

  @Input() spind?: Spind;

  @Output() deleteEvent = new EventEmitter<number>();

  @Output() editEvent = new EventEmitter<number>();

  constructor(private spindService: SpindService) { }

  ngOnInit(): void {
  }

  deleteSpind() {
    this.deleteEvent.emit(this.spind?.id)
  }

  editSpind() {
    this.editEvent.emit(this.spind?.id)
  }
}
