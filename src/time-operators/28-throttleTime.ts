import {
    asyncScheduler,
    debounceTime,
    distinctUntilChanged,
    fromEvent,
    map,
    throttleTime,
  } from "rxjs";
  
  const click$ = fromEvent(document, "click");
  click$.pipe(throttleTime(3000)).subscribe(console.log);
  
  // EJemplo 2
  const input = document.createElement("input");
  document.querySelector("body").append(input);
  
  const type$ = fromEvent<any>(input, "keyup");
  type$
    .pipe(
      throttleTime(1000, asyncScheduler, {
        leading: true,
        trailing: true,
      }),
      map((event) => {
        return event.target.value;
      }),
      distinctUntilChanged()
    )
    .subscribe(console.log);
  