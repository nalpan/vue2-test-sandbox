<template>
  <div id="app">
    <div class="display">
      <span>{{ text }}</span>
    </div>
    <text-component v-model="text" />
    <footer-component class="footer" :text="text" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FooterComponent from "./components/footer-component/FooterComponent.vue";
import TextComponent from "./components/text-component/TextComponent.vue";

export default Vue.extend({
  name: "App",
  components: {
    FooterComponent,
    TextComponent,
  },
  data() {
    return {
      text: "",
    };
  },
  methods: {
    clearText() {
      this.text = "";
    },
  },
});
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.display {
  height: 22px;
}
.footer {
  position: fixed;
  left: 0px;
  bottom: 0px;
} */
</style>
