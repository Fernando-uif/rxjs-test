import { debounceTime, distinctUntilChanged, fromEvent, map } from "rxjs";

const click$ = fromEvent(document, "click");
click$.pipe(debounceTime(3000)).subscribe(console.log);

// EJemplo 2
const input = document.createElement("input");
document.querySelector("body").append(input);

const type$ = fromEvent<any>(input, "keyup");
type$
  .pipe(
    debounceTime(1000),
    map((event) => {
      return event.target.value;
    }),
    distinctUntilChanged()
  )
  .subscribe(console.log);
