import Vue from "vue";
import SampleComponent from "./Component.vue";
import { sum } from "./sample";

function greeter(person: string) {
  return `Hello, ${person}`;
}

let user = "Jane User";

console.log(greeter(user));
console.log(sum(1, 2));

new Vue({
  render: (h) => h(SampleComponent),
}).$mount("#app");
