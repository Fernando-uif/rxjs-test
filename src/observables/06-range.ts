import { asyncScheduler, observeOn, of, range } from "rxjs";

// Este sera sincrono
// Inicio en 1 y quiero los 5 valores consecutivos siguientes , es lo que significa
const src$ = range(1, 5);
// -> 1,2,3,4,5
const src2$ = range(-5, 10);
// ->  -5, -4, -3, -2, -1, 0, 1, 2, 3, 4
// Aqui tendremos 10, porque son 10 emisiones de elementos, por eso es que llega a 4
const src3$ = range(5);
// -> 0, 1, 2, 3, 4
// Si no especificamos el inicio , este empieza de 0 y coloca el total de emisiones
const src4$  = range(1,5).pipe(observeOn(asyncScheduler));
// Si queremos hacerlo asyncrono tenemos que utilizar el .pipe(observerOn(asyncCheduler));| Entonces veremos primero el 'inicio' 'fin' elementos y despues nuestro elemento de src4$

src$.subscribe(console.log);
src2$.subscribe(console.log);
src3$.subscribe(console.log);
console.log('incio');
src4$.subscribe(console.log);
console.log('fin');
