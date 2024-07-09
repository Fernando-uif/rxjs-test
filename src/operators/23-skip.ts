import { fromEvent, interval, skip, takeUntil, tap } from "rxjs";

const button = document.createElement("button");
button.innerText = "Stop timer";

document.querySelector("body").append(button);

const counter$ = interval(1000);
// const clickBtn$ = fromEvent(button, "click");
const clickBtn$ = fromEvent(button, "click").pipe(
  tap(() => {
    console.log("tap antes");
  }),
  skip(2),
  tap(() => {
    console.log("tap despues");
  })
);

counter$.pipe(takeUntil(clickBtn$)).subscribe({
  next(value) {
    console.log(value, "next");
  },
  complete() {
    console.log("complete");
  },
});
