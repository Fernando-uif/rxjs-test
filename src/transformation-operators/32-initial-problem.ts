import { debounceTime, fromEvent, map, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";

const body = document.querySelector("body");

const textInput = document.createElement("input");
const orderList = document.createElement("ol");

body.append(textInput, orderList);

const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

input$
  .pipe(
    debounceTime(500),
    map((element) => {
      return ajax.getJSON(
        `https://api.github.com/users/${element.target["value"]}`
      );
    })
  )
  .subscribe((resp) => {
    resp.pipe(map<any,any>((resp)=>{
        return resp.url
    }))
  });
