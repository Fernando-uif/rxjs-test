import { fromEvent, map, switchMap } from "rxjs";

import { ajax } from "rxjs/ajax";

const body = document.querySelector("body");

const textInput = document.createElement("input");
const orderList = document.createElement("ol");

body.append(textInput, orderList);

const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

const url = "https://httpbin.org/delay/1?arg=";
input$
  .pipe(
    map((value) => {
      return value.target["value"];
    }),
    switchMap((text) => ajax.getJSON(url + text))
  )
  .subscribe(console.log);
