import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Kurs} from "../../entities/kurs.model";
import {KursService} from "../../services/kurs.service";

@Component({
  selector: 'app-kurs-item',
  templateUrl: './kurs-item.component.html',
  styleUrls: ['./kurs-item.component.css']
})
export class KursItemComponent implements OnInit {

  @Input() kurs?: Kurs;

  @Output() deleteEvent = new EventEmitter<number>();

  @Output() editEvent = new EventEmitter<number>();

  constructor(private kursService: KursService) { }

  ngOnInit(): void {
  }

  deleteKurs() {
    this.deleteEvent.emit(this.kurs?.id)
  }

  editKurs() {
    this.editEvent.emit(this.kurs?.id)
  }
}
