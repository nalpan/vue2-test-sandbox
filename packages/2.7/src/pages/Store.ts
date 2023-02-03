import { defineStore } from 'pinia'
import { ref } from 'vue'
import { task, fetchTasks } from "../repositories/repo";

export const Store = defineStore('Store', () => {
  let tasks = ref<task[]>([])
  async function loadTasks() {
    const response = await fetchTasks();
    tasks.value = response;
  }
  return { tasks, loadTasks };
})
