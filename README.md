# Nom de l'aplicació

Agenda Personal

## Autor/a

Anabel Mendoza Gonzales

## Descripció

Aplicació d'agenda personal per consultar tasques, cercar-les per text i categoria, i seleccionar una tasca per veure'n el detall.

## Versions utilitzades

- Node.js 24.21.0 (branca 24.x LTS)
- npm 11.19.0
- Angular 22.2.0
- Angular CLI 22.2.0
- TypeScript 6.0.x
- Git 2.x
- Visual Studio Code

## Com crear i executar el projecte

Des de la carpeta arrel del projecte:

```bash
npm install
npx ng serve
```

Obre `http://localhost:4200/`. El servidor de desenvolupament actualitza l'aplicació automàticament en desar els canvis (hot reload).

Per compilar el projecte i executar les proves:

```bash
npx ng build
npx ng test
```

## Estat de l'EAC1

EAC1 aprovat. Aquest projecte parteix de la base creada a l'EAC1. El treball de l'EAC2 es fa a la branca `ra2-components`.

## Enllaç del repositori

https://github.com/anabelmendoza284-boop/ioc-angular-agenda-anabel

## Branca de treball

`ra2-components`

## Components creats

- `AppComponent`: aplica els filtres i mostra els resultats, el comptador i el detall de la tasca seleccionada.
- `AgendaFilterComponent`: permet cercar per text i categoria, aplicar els filtres i restablir-los.
- `AgendaListComponent`: mostra la llista de tasques.
- `AgendaCardComponent`: mostra el resum d'una tasca i permet seleccionar-la.
- `CategoryBadgeComponent`: mostra la categoria de la tasca com una etiqueta.
