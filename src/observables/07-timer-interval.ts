// Son asincronos
import { Observer, interval, timer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => {
    console.log(`next:${value}`);
  },
  complete: () => {
    console.log("complete");
  },
  error: () => {
    console.log("error");
  },
};



// Interval y timer son asincronos por naturaleza
const interval$ = interval(2000);
const timer$ = timer(2000);

// Esperate 2 segundos para que despues cada segundo empieces a emitir cada segundo 
// const timer$ = timer(2000,1000);

// Con esto podemos decir en que momento necesitamos que se haga o ejecute un observer, aqui le diremos que
// lo haga en este momento mas 5 segundos
const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);
const timerInTime$ = timer(hoyEn5);


console.log("inicio");
interval$.subscribe(observer);
// Timer
timer$.subscribe(observer);
console.log("fin");

timerInTime$.subscribe(observer);
