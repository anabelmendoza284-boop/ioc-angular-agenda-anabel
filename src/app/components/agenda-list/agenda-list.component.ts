import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AgendaItem } from '../../models/agenda-item.model';
import { AgendaCardComponent } from '../agenda-card/agenda-card.component';

@Component({
  selector: 'app-agenda-list',
  standalone: true,
  imports: [AgendaCardComponent],
  templateUrl: './agenda-list.component.html',
  styleUrl: './agenda-list.component.scss'
})
export class AgendaListComponent {

  @Input({ required: true })
  items: AgendaItem[] = [];

  @Output()
  seleccionar = new EventEmitter<AgendaItem>();

  seleccionarItem(item: AgendaItem): void {
    this.seleccionar.emit(item);
  }

}