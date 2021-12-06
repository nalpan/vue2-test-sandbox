<template>
  <div class="footer">
    <button
      class="button"
      :class="{ error: error }"
      @click="textValidate(text)"
    >
      text is 'success'?
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { isSuccess } from "./FooterComponent.modules";

export default Vue.extend({
  props: {
    text: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      error: false,
    };
  },
  methods: {
    textValidate(text: string) {
      this.error = !isSuccess(text);
    },
  },
})
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.1);
}
.button {
  height: 60%;
  padding: 0 30px;
  font-size: 1.5rem;
}
.button.error {
  background-color: rgba(193, 66, 66, 0.5);
}
</style>