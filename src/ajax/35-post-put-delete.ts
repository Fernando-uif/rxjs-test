import { ajax } from "rxjs/ajax";

const url = "https://httpbin.org/delay/1";

ajax.get(url);
ajax
  .post(
    url,
    {
      id: "1",
      name: "fera",
    },
    {
      "Content-Type": "application/json",
    }
  )
  .subscribe(console.log);
ajax
  .put(
    url,
    {
      id: "1",
      name: "fera",
    },
    {
      "Content-Type": "application/json",
    }
  )
  .subscribe(console.log);

ajax({
  url,
  body: {
    name: "fernando",
    route: "/",
  },
  method: "POST",
  headers: {
    "mi-token": "token",
  },
}).subscribe(console.log);
