import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agenda-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agenda-filter.component.html',
  styleUrl: './agenda-filter.component.scss'
})
export class AgendaFilterComponent {

  texto = '';

  categoria = '';

  @Output()
  aplicar = new EventEmitter<{
    texto: string;
    categoria: string;
  }>();

  @Output()
  limpiar = new EventEmitter<void>();

  aplicarFiltro() {
    this.aplicar.emit({
      texto: this.texto,
      categoria: this.categoria
    });
  }

  limpiarFiltro() {

    this.texto = '';
    this.categoria = '';

    this.limpiar.emit();
  }

}