import { first, fromEvent, map, take, tap } from "rxjs";

const cliks$ = fromEvent<MouseEvent>(document, "click");

cliks$
  .pipe(tap(console.log))
  .pipe(first<MouseEvent, MouseEvent>((event) => event.clientY > 150))
  .subscribe({
    next: (value) => console.log(value),
    complete() {
      console.log("complete");
    },
  });
