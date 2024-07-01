import { Observable, Observer } from "rxjs";

// const observable$ = Observable.create()

const observer: Observer<any> = {
  next: (value) => console.log(`next: ${value}`),
  error: (err) => console.log(`err:${err}`),
  complete: () => console.log("complete"),
};
const observable$ = new Observable<string>((subscriber) => {
  // nos permite crear subscripciones
  subscriber.next("hole");
  subscriber.next("mundo");
  // Forzar un error
  //   const a = undefined;
  //   a.nombre = "fernando";

  subscriber.complete();
  subscriber.next("amigo");
  subscriber.next("Como estas");
});

// observable$.subscribe(
//   (value) => console.log("next:" + value),
//   (err) => console.log("err:" + err),
//   () => console.log("Complete")
// );
observable$.subscribe(observer);
