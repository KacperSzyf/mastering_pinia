<template>
  <main>
    <!-- headin -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia pineapple logo" />
      <h1>{{ taskStore.name }}</h1>
    </header>
    <!-- task list -->
    <div class="task-list">
      <div v-for="task in taskStore.tasks" :key="task.id">
        <p>{{ task.title }}</p>
      </div>
    </div>
  </main>
</template>

<script>
import { useTaskStore } from './stores/TaskStore'
export default {
  setup() {
    const taskStore = useTaskStore()

    return { taskStore }
  }
}
</script>
