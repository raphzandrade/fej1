import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Person } from 'src/app/interfaces';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit {

  @Input() personInput: Person

  @Output() deleteCard: EventEmitter<number> = new EventEmitter<number>()


  constructor() { }

  ngOnInit(): void {
  }

  onDeleteCard(): void {
    this.deleteCard.emit(this.personInput.id)
  }

}
