import { catchError, map, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";

const url = "https://api.github.com/users?per_page=5";

ajax(url)
  .pipe(
    map((response) => {
      return response.response;
    }),
    catchError((err: AjaxError) => {
      console.log(err.message);
      return of([]);
      // Tenemos que regresar un observable si es que falla
    })
  )
  .subscribe(console.log);
