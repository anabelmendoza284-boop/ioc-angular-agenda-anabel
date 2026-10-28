import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AgendaItem } from '../../models/agenda-item.model';
import { CategoryBadgeComponent } from '../category-badge/category-badge.component';
@Component({
  selector: 'app-agenda-card',
  standalone: true,
 imports: [CategoryBadgeComponent],
  templateUrl: './agenda-card.component.html',
  styleUrl: './agenda-card.component.scss'
})
export class AgendaCardComponent {

  @Input({ required: true })
  item!: AgendaItem;

  @Output()
  seleccionar = new EventEmitter<AgendaItem>();

  seleccionarItem(): void {
    this.seleccionar.emit(this.item);
  }

}