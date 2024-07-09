import { of, take, tap } from "rxjs";

const nums = of(1, 2, 3, 4, 5);
nums
  .pipe(tap(console.log))
  .pipe(take(3))
  .subscribe({
    next(value) {
      console.log("next", value);
    },
    complete() {
      console.log("complete");
    },
  });
// Solo emite 3 elementos y luego manda a llamar el complete y cancela la ejecucion del observable
