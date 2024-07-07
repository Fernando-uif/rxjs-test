import { of, from, Observer } from "rxjs";

/**
 * of : crea un observable Se utiliza para tomar los argumentos y genera una secuencia de valores
 * fromt : crea un observablre con base a un array , un objeto , promesa o iterable u observable
 */

const observer: Observer<any> = {
  next: (val) => console.log(val),
  complete: () => console.log(`complete`),
  error(err) {
    console.log(err);
  },
};
// of manda todo el elemento
// from manda todo por separado
// const source$ = of([1, 2, 3, 4, 5]);
// const source$ = of('fernando');

// const source$ = from(fetch("https://api.github.com/users/klerith"));
// source$.subscribe(async(resp) => {

//   const data = await resp.json();
//   console.log(data);
// });
// source$.subscribe(observer);

// const myGenerator = function* () {
//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
//   yield 5;
// };
// const myIterable = myGenerator();

// from(myIterable).subscribe(observer);

const source$ = from([1,2,3,4,5,5]);
source$.subscribe(observer);