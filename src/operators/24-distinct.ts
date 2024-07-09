import { distinct, from, of } from "rxjs";

const num$ = of(1, "1", 1, 3, 33, 4, 4, 5, 5, 34, 44, 3, 44, 4, 5, 1, "1");

num$.pipe(distinct()).subscribe(console.log);

interface Personaje {
  nombre: string;
}

const personaje: Personaje[] = [
  {
    nombre: "fer",
  },
  {
    nombre: "fernando",
  },
  {
    nombre: "armando",
  },
  {
    nombre: "megaman",
  },
  {
    nombre: "zero",
  },
  {
    nombre: "fer",
  },
];

from(personaje)
  .pipe(distinct((character) => character.nombre))
  .subscribe(console.log);
