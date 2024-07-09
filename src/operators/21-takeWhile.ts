import { range, take, takeWhile, fromEvent, map } from "rxjs";


const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    map(({ x, y }) => {
      return { x, y };
    }),
    // takeWhile(({ y }) => y <= 150)
    takeWhile(({ y }) => y <= 150, true)
  )
  .subscribe({
    next(value) {
      console.log(value, "next");
    },
    complete() {
      console.log("complete");
    },
  });
