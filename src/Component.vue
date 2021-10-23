<template>
  <div class="text">
    <div>{{ message }}</div>
    <div>{{ sum }}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { sum } from "./sample";

export default Vue.extend({
  props: {
    message: {
      type: String,
      default: "hello vue!"
    }
  },
  computed: {
    sum() {
      return sum(1, 2);
    },
  },
});
</script>

<style scoped>
/* .text {
  color: red;
} */
</style>