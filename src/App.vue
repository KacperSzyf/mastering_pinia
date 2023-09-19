<template>
  <main>
    <!-- headin -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia pineapple logo" />
      <h1>{{ taskStore.name }}</h1>
    </header>
    <!-- task list -->
    <div class="task-list">
      <p>all tasks</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
    <div class="task-list">
      <p>favourites tasks</p>
      <div v-for="task in taskStore.favourites" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>

<script>
import TaskDetails from './components/TaskDetails.vue'
import { useTaskStore } from './stores/TaskStore'
export default {
  components: { TaskDetails },
  setup() {
    const taskStore = useTaskStore()

    return { taskStore }
  }
}
</script>
