<template>
  <div>
    <div><input type="text" v-model="innerValue" /></div>
    <div>
      <span>{{ errorMsg }}</span>
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
    errorMsg() {
      return this.value === "success" ? "" : "error!!!";
    },
  },
});
</script>