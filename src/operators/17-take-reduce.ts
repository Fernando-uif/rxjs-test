import { interval, reduce, take, tap } from "rxjs";


const totalReducer = (acc: number, currentValue: number) => {
  return acc + currentValue;
};

interval(1000)
  .pipe(take(3))
  .pipe(tap(console.log))
  .pipe(reduce(totalReducer, 0))
  .subscribe({
    next(value) {
      console.log(value);
    },
    complete() {
      console.log("complete");
    },
  });
