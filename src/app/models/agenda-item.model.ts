export interface AgendaItem {
  id: number;
  nombre: string;
  descripcion: string;
  categoria: string;
  fecha: Date;
  prioridad: number;
  destacado?: boolean;
}
