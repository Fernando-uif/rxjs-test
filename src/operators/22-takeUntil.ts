import { fromEvent, interval, takeUntil } from "rxjs";

const button = document.createElement("button");
button.innerText = "Stop timer";

document.querySelector("body").append(button);

const counter$ = interval(1000);
const clickBtn$ = fromEvent(button, "click");

counter$.pipe(takeUntil(clickBtn$)).subscribe({
  next(value) {
    console.log(value, "next");
  },
  complete() {
    console.log("complete");
  },
});
