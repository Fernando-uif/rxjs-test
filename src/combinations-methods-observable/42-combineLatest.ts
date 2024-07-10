import { combineLatest, fromEvent, merge } from "rxjs";

const keyup$ = fromEvent(document, "keyup");
const click$ = fromEvent(document, "click");

combineLatest([keyup$, click$]).subscribe(console.log);

