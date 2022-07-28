import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Studiengang} from "../../entities/studiengang.model";
import {StudiengangService} from "../../services/studiengang.service";

@Component({
  selector: 'app-studiengang-item',
  templateUrl: './studiengang-item.component.html',
  styleUrls: ['./studiengang-item.component.css']
})
export class StudiengangItemComponent implements OnInit {

  @Input() studiengang?: Studiengang;

  @Output() deleteEvent = new EventEmitter<number>();

  @Output() editEvent = new EventEmitter<number>();

  constructor(private studiengangService: StudiengangService) { }

  ngOnInit(): void {
  }

  deleteStudiengang() {
    this.deleteEvent.emit(this.studiengang?.id)
  }

  editStudiengang() {
    this.editEvent.emit(this.studiengang?.id)
  }
}
