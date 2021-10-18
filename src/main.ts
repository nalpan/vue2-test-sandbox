import { sum } from "./sample";

function greeter(person: string) {
  return `Hello, ${person}`;
}

let user = "Jane User";

console.log(greeter(user));
console.log(sum(1, 2));
