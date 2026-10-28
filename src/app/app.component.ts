import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AgendaItem } from './models/agenda-item.model';
import { AGENDA_ITEMS } from './data/agenda-mock';
import { AgendaListComponent } from './components/agenda-list/agenda-list.component';
import { AgendaFilterComponent } from './components/agenda-filter/agenda-filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
  AgendaListComponent,
  AgendaFilterComponent,
  DatePipe
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public title = 'Agenda Personal';

  items: AgendaItem[] = AGENDA_ITEMS;

  itemsFiltrados: AgendaItem[] = AGENDA_ITEMS;

  elementoSeleccionado?: AgendaItem;

  aplicarFiltros(filtro: { texto: string; categoria: string }): void {
    const texto = filtro.texto.trim().toLocaleLowerCase('es');
    this.itemsFiltrados = this.items.filter(item => {
      const coincideTexto =
        item.nombre.toLocaleLowerCase('es').includes(texto) ||
        item.descripcion.toLocaleLowerCase('es').includes(texto);

      const coincideCategoria =
        !filtro.categoria ||
        item.categoria === filtro.categoria;

      return coincideTexto && coincideCategoria;
    });
    if (this.elementoSeleccionado && !this.itemsFiltrados.some(item => item.id === this.elementoSeleccionado?.id)) {
      this.elementoSeleccionado = undefined;
    }
  }

  limpiarFiltros(): void {
    this.itemsFiltrados = this.items;
    this.elementoSeleccionado = undefined;
  }

  seleccionarItem(item: AgendaItem): void {
    this.elementoSeleccionado = item;
  }

}
