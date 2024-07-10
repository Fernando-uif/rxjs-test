import { concat, interval, take } from "rxjs";

const interval$ = interval(1000);

concat(
    interval$.pipe(take(4)),
    interval$.pipe(take(2)),
    [1,2,3,4,5]
).subscribe(console.log);
