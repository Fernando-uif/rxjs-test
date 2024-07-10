import { fromEvent, map, sampleTime } from "rxjs";

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    map((element) => {
      return { x: element.x, y: element.y };
    })
  )
  .pipe(sampleTime(2000))
  .subscribe(console.log);
