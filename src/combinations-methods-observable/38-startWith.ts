import { of, startWith } from "rxjs";


const numbers$ = of(1,2,3);
numbers$.pipe(startWith('a')).subscribe(console.log)