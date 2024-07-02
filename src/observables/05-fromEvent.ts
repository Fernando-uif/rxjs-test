import { fromEvent, Observer } from "rxjs";

/**
 * Dom Events
 */

const src1$ = fromEvent<MouseEvent>(document, "click");
const src2$ = fromEvent<KeyboardEvent>(document, "keyup");

const observer: Observer<any> = {
  next: (value) => {
    console.log(value);
  },
  complete: () => {},
  error: () => {},
};

src1$.subscribe((event) => {
  console.log(event.target);
});
src2$.subscribe((event)=>{
    console.log(event);
});
