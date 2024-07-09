import { distinct, distinctUntilChanged, from, of } from "rxjs";

const num$ = of(1, "1", 1, 3, 33, 4, 4, 5, 5, 34, 44, 3, 44, 4, 5, 1, "1");

num$.pipe(distinctUntilChanged()).subscribe(console.log);

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
    nombre: "zero",
  },
  {
    nombre: "fer",
  },
];

// True los quita porque son iguales
from(personaje)
  .pipe(distinctUntilChanged((prev, current) => prev.nombre === current.nombre))
  .subscribe(console.log);
