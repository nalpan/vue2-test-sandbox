import Vue from "vue";
import SampleComponent from "./components/sample-component/SampleComponent.vue";

function greeter(person: string) {
  return `Hello, ${person}`;
}

let user = "Jane User";

new Vue({
  render: (h) => h(SampleComponent),
}).$mount("#app");
