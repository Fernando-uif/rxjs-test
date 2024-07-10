import { auditTime, fromEvent, map, tap } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, "click");
click$
  .pipe(
    map((value) => {
      return { x: value.x, y: value.y };
    }),
    tap((val) => console.log("tap", val)),
    auditTime(3000)
  )
  .subscribe(console.log);
