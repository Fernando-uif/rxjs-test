import { asyncScheduler } from "rxjs";

// Esto es lo que podremos hacer basicamente con el asyncScheduler
// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

const saludar = () => {
  console.log("hello");
};
const saludar2 = (state: { nombre: string; apellido: string }) => {
  console.log(`Hola:${state.nombre} ${state.apellido}`);
};

// funcion que queremos ejecutar y el tiempo que queremos que se ejecute
// asyncScheduler.schedule(saludar, 3000);

// El tercer argumento sera un state, y este se mandaria como el argumento de 'nombre' , pero si tenemos mas de un argumento, este no funcionaria
// asyncScheduler.schedule(saludar2, 3000, {
//   nombre: "fernando",
//   apellido: "sosa",
// });

// Funcion con timeout y autoejecutable, como el setInterval
// No puede ser una funcion de flecha
const subs = asyncScheduler.schedule(
  function (state) {
    console.log(`state:${state}`);

    this.schedule(state + 1, 1000);
  },
  3000,
  0
);

// setTimeout(() => {
//     // Con este unsubscribe termina la ejecucion del schedule
//   subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule(() => subs.unsubscribe, 6000);
