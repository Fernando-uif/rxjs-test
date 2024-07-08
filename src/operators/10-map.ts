import { fromEvent, Observer, range } from "rxjs";
import { map } from "rxjs/operators";

const observer: Observer<any> = {
  next: (val) => {
    console.log(val);
  },
  error(err) {
    console.log(err);
  },
  complete: () => {
    console.log("complete");
  },
};

const obs$ = range(1, 5).pipe(
  map<number, string>((val: number) => {
    // si no ponemos return nos da un undefined
    return `${val * 10}`;
  })
);
obs$.subscribe(observer);

const keyUp$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  map((value) => {
    return value.key;
  })
);
keyUp$.subscribe((value) => {
  console.log("key: ", value);
});
