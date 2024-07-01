import { Observable, Observer } from "rxjs";

// const observable$ = Observable.create()

const observer: Observer<any> = {
  next: (value) => console.log(`next: ${value}`),
  error: (err) => console.log(`err:${err}`),
  complete: () => console.log("complete"),
};

const intervalo$ = new Observable<number>((subscriber) => {
  let counter = 1;
  const interval = setInterval(() => {
    subscriber.next(counter++);
    console.log(counter);
  }, 1000);

  // Limpieza como en useEffect
  return () => {
    clearInterval(interval);
    console.log("Intervalo destr");
  };
});

const subscription = intervalo$.subscribe((num) => {
  console.log(`Num:${num}`);
});
const subscription2 = intervalo$.subscribe((num) => {
  console.log(`Num:${num}`);
});
const subscription3 = intervalo$.subscribe((num) => {
  console.log(`Num:${num}`);
});

// Podemos encadernar suscripciones a la suscripcion original, esto lo haremos con el add
subscription.add(subscription2);
subscription2.add(subscription3);


setTimeout(() => {
  // Cancelar la suscripcion desde aca
  subscription.unsubscribe();
  // subscription2.unsubscribe();
  // subscription3.unsubscribe();
  console.log("Completado timeout");
}, 3000);
