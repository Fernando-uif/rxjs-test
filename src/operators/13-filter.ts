import { range } from "rxjs";
import { filter } from "rxjs/operators";

range(1, 10)
  .pipe(
    filter((value, index) => {
      console.log(index, "index");
      return value > 5;
    })
  )
  .subscribe((value) => {
    console.log(value);
  });
