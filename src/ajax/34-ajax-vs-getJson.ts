import { catchError, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1";
const url2 = "https://api.github.com/users?per_page=5";
const handleError = (resp: AjaxError) => {
  console.log("error", resp.message);
  return of({});
};
const obs$ = ajax
  .getJSON(url, {
    "Content-Type": "application/json",
    "mi-token": "jfkjf",
  })
  .pipe(catchError(handleError));
  
const obs2$ = ajax(url2).pipe(catchError(handleError));

obs$.subscribe((data) => {
  console.log(data, "data");
});
obs2$.subscribe((data) => {
  console.log(data, "data");
});
