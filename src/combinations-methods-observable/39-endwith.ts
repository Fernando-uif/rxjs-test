import { endWith, of, startWith } from "rxjs";


const numbers$ = of(1,2,3);
numbers$.pipe(endWith('z')).subscribe(console.log)