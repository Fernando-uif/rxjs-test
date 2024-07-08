import { fromEvent } from "rxjs";
import { map, pluck } from "rxjs/operators";

const keyUp$ = fromEvent<KeyboardEvent>(document, "keyup");
const keyUpCode$ = keyUp$.pipe(
  map((value) => {
    return value.code;
  })
);

const keyUpPluck$ = keyUp$.pipe(pluck("key", "anchor"));

keyUpCode$.subscribe((code) => console.log("map", code));
keyUpPluck$.subscribe((code) => console.log("pluck", code));
