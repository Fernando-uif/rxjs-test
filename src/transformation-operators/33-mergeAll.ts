import { debounceTime, fromEvent, map, mergeAll, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { GithubUser,Item } from '../interfaces/Github-User.interface';



const body = document.querySelector("body");

const textInput = document.createElement("input");
const orderList = document.createElement("ol");

body.append(textInput, orderList);

const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

input$
  .pipe(
    debounceTime<KeyboardEvent>(500),
    map<KeyboardEvent, Observable<GithubUser>>((element) => {
      return ajax.getJSON(
        `https://api.github.com/search/users?q=${element.target["value"]}`
      );
    }),
    mergeAll<Observable<GithubUser>>(),
    map<GithubUser, Item[]>((response) => {
      return response.items || [];
    })
  )
  .subscribe((resp) => {
    console.log(resp[0]);
  });
