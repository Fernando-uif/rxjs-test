import { Observable, Observer, of } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log(`next:${value}`),
  error: (error) => console.log(`error:${error}`),
  complete: () => console.log(`complete`),
};
// const obs$ = of(1, 2, 3, 4, 5, 6);
const obs$ = of(
  [1, 2],
  { a: 1, b: 2 },
  function () {},
  true,
  Promise.resolve(true)
);

console.log("inicio");
obs$.subscribe(observer);
console.log("fin");
