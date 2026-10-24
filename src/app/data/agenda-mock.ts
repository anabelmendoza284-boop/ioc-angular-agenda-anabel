import { AgendaItem } from '../models/agenda-item.model';

export const AGENDA_ITEMS: AgendaItem[] = [
  {
    id: 1,
    nombre: 'Entregar EAC2',
    descripcion: 'Finalizar y entregar la actividad',
    categoria: 'Estudios',
    fecha: new Date('2026-11-03'),
    prioridad: 10,
    destacado: true
  },
  {
    id: 2,
    nombre: 'Ir al gimnasio',
    descripcion: 'Entrenamiento de fuerza',
    categoria: 'Salud',
    fecha: new Date('2026-10-05'),
    prioridad: 8,
    destacado: false
  },
  {
    id: 3,
    nombre: 'Hacer la compra',
    descripcion: 'Comprar productos de la semana',
    categoria: 'Personal',
    fecha: new Date('2026-10-06'),
    prioridad: 6,
    destacado: false
  },
  {
    id: 4,
    nombre: 'Estudiar Angular',
    descripcion: 'Repasar @Input y @Output',
    categoria: 'Estudios',
    fecha: new Date('2026-10-08'),
    prioridad: 9,
    destacado: true
  },
  {
    id: 5,
    nombre: 'Paseo en bicicleta',
    descripcion: 'Ruta junto al mar',
    categoria: 'Deporte',
    fecha: new Date('2026-10-10'),
    prioridad: 5,
    destacado: false
  },
  {
    id: 6,
    nombre: 'Leer documentación',
    descripcion: 'Leer guía de Angular 22',
    categoria: 'Estudios',
    fecha: new Date('2026-10-12'),
    prioridad: 7,
    destacado: false
  },
  {
    id: 7,
    nombre: 'Visita médica',
    descripcion: 'Revisión anual',
    categoria: 'Salud',
    fecha: new Date('2026-10-15'),
    prioridad: 8,
    destacado: true
  },
  {
    id: 8,
    nombre: 'Preparar presentación',
    descripcion: 'Presentación del proyecto',
    categoria: 'Trabajo',
    fecha: new Date('2026-10-18'),
    prioridad: 9,
    destacado: false
  },
  {
    id: 9,
    nombre: 'Organizar escritorio',
    descripcion: 'Ordenar documentos',
    categoria: 'Personal',
    fecha: new Date('2026-10-20'),
    prioridad: 4,
    destacado: false
  },
  {
    id: 10,
    nombre: 'Practicar TypeScript',
    descripcion: 'Ejercicios de interfaces',
    categoria: 'Estudios',
    fecha: new Date('2026-10-22'),
    prioridad: 7,
    destacado: true
  }
];