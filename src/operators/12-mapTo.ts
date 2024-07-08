// ! Deprecated

import { fromEvent } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";

const keyUp$ = fromEvent<KeyboardEvent>(document, "keyup");
const keyUpCode$ = keyUp$.pipe(
  map((value) => {
    return value.code;
  })
);

const keyUpPluck$ = keyUp$.pipe(pluck("key", "anchor"));
// ! To be removed in v9. Use map instead: map(() => value).
const keyUpPluckMapTo$ = keyUp$.pipe(
  mapTo((value) => {
    return "tecla presionada";
  })
);

keyUpCode$.subscribe((code) => console.log("map", code));
keyUpPluck$.subscribe((code) => console.log("pluck", code));
keyUpPluckMapTo$.subscribe((code) => console.log(code));
