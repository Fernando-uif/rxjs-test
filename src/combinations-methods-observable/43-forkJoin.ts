import { delay, forkJoin, interval, of, take } from "rxjs";

const numeros$ = of(1, 2, 3, 4, 5);
const intervalo$ = interval(1000).pipe(take(3));

const letters$ = of("a", "b", "c").pipe(delay(3500));

const obs4$ = forkJoin([numeros$, intervalo$, letters$]);
obs4$.subscribe((value)=>{
    console.log(value,'values');
});
