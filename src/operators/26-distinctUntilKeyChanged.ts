import { distinctUntilChanged, distinctUntilKeyChanged, from } from "rxjs";

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
from(personaje).pipe(distinctUntilKeyChanged("nombre")).subscribe(console.log);
