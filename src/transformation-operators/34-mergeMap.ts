import { fromEvent, interval, map, mergeMap, of, take, takeUntil } from "rxjs";

const letras$ = of("a", "b", "c");

letras$.pipe(
  mergeMap((val) =>
    interval(1000).pipe(
      map((value) => value + val),
      take(4)
    )
  )
);
//   .subscribe({
//     next(value) {
//       console.log(value);
//     },
//     complete() {
//       console.log("complete");
//     },
//   }
// );

const mouseDown$ = fromEvent(document, "mousedown");
const mouseUp$ = fromEvent(document, "mouseup");
const interval$ = interval();

mouseDown$
  .pipe(mergeMap(() => interval$.pipe(takeUntil(mouseUp$))))
  .subscribe(console.log);
