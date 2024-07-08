import { from, map, reduce, scan, tap } from "rxjs";

const num = [1, 2, 3, 4, 5];

const totalAcc = (ccValue: number, current: number) => {
  return ccValue + current;
};

// Reduce
from(num).pipe(reduce(totalAcc, 0)).subscribe(console.log);

// Scan
from(num)
  .pipe(scan(totalAcc, 0))
  .subscribe((value) => {
    console.log("value:", value);
  });

// redux

interface User {
  id?: string;
  authenticate?: boolean;
  token?: string;
  age?: number;
}

const user: User[] = [
  {
    id: "fer",
    authenticate: false,
    token: null,
  },
  {
    id: "fer",
    authenticate: true,
    token: "abc",
  },
  {
    id: "fer",
    authenticate: true,
    token: "abc-123",
  },
];

const state$ = from<User[]>(user)
  .pipe(
    scan<User, User>(
      (acc, curr) => {
        return { ...acc, ...curr };
      },
      { age: 33 }
    )
  )
  .pipe(tap(console.log));
const id$ = state$.pipe(
  map((value) => {
    return value.id;
  })
);
id$.subscribe(console.log);
