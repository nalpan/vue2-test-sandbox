<template>
  <div>
    <div><input type="text" v-model="innerValue" /></div>
    <div>
      <span v-if="isError" style="color: red;">no input!!!</span>
      <span v-if="!isError">input</span>
    </div>
  </div>
</template>

<script lang="ts">
// @ts-nocheck
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  computed: {
    innerValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
    /** 状態のテスト用 */
    isError() {
      return this.value === "";
    },
  },
});
</script>