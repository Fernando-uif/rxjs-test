import { fromEvent, range } from "rxjs";
import { filter, map } from "rxjs/operators";

range(1, 10)
  .pipe(
    filter((value, index) => {
      console.log(index, "index");
      return value > 5;
    })
  )
  .subscribe((value) => {
    console.log(value);
  });

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  map((value) => {
    return value.code;
  }),
  filter((value) => {
    return value === "Enter";
  })
);
keyup$.subscribe(console.log);
