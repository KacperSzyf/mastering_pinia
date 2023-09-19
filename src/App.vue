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
        <TaskDetails :task="task"/>
        <!-- <p>{{ task.title }}</p> -->
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
