import { range } from "rxjs";
import { map, tap } from "rxjs/operators";

const numbers = range(1, 5);

numbers
  .pipe(
    tap<number>((value) => {
      console.log(value, "tap antes");
    }),
    map((value) => {
      return value * 10;
    }),
    tap({
      next(value) {
        console.log(value, "despues");
      },
      complete() {
        console.log("termino el segundo tap");
      },
    })
  )
  .subscribe((value) => {
    console.log(value, "suscribe");
  });
