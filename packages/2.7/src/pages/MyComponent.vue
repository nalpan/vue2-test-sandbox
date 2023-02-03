<template>
  <div>
    <li>
      <ul v-for="task in store.tasks" :key="task.id">
        {{ task.id }}: {{ task.description }}
      </ul>
    </li>
  </div>
</template>

<script setup lang="ts">
import { Store } from './Store'

const store = Store()
store.loadTasks()
</script>
