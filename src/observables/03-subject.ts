import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log(`next:${value}`),
  error: (error) => console.log(`error:${error}`),
  complete: () => console.log(`complete`),
};

const intervalo$ = new Observable<number>((subs) => {
  const internalId = setInterval(() => {
    subs.next(Math.random());
  }, 1000);

  return () => {
    clearInterval(internalId);
  };
});

// ! SI queremos que lo que mande nuestro observable sea lo mismo para todas las suscripciones, esto sin importar si tenemos un Math.random

// const subs1$ = intervalo$.subscribe((data) => {
//   console.log(`subs1:${data}`);
// });
// const subs2$ = intervalo$.subscribe((data) => {
//   console.log(`subs2:${data}`);
// });

/**
 * 1- Casteo multiple
 * Muchas suscripciones estan sujetas entonces sirve para eliminar todas las suscripciones
 *
 * 2- Tambien es un observer
 *
 * 3- Next, error y complete | Se pueden manejar
 */

const subject$ = new Subject();
const intervalSubject = intervalo$.subscribe(subject$);

const subs1$ = subject$.subscribe(observer);
const subs2$ = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  // para que se pueda llamar la destruccion del set interval
  intervalSubject.unsubscribe();
}, 3500);
