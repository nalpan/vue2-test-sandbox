<template>
  <div id="app">
    <text-component v-model="text" />
    <div class="text-length-result">
      <span v-if="lengthError" style="color: red;">text length ng</span>
      <span v-if="!lengthError">text length ok!!!</span>
    </div>
    <footer-component class="footer" :text="text" @textValidate="lengthValidate($event)"/>
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
      lengthError: true
    };
  },
  methods: {
    lengthValidate(isSuccess: boolean){
      this.lengthError = !isSuccess
    }
  }
});
</script>

<style>
#app {
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
}
</style>
