<template>
  <main>
    <!-- headin -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia pineapple logo" />
      <h1>{{ taskStore.name }}</h1>
    </header>
    <!-- new task form -->
    <div class="new-task-form">
        <TaskForm/>
    </div>
    <!-- loading -->
    <div class="loading" v-if="taskStore.loading">loading tasks...</div>
    <!-- filer -->
    <nav class = "filter">
      <button @click="filter = 'all'">show all</button>
      <button @click="filter = 'favourites'"> show favourites</button>
    </nav>
    <!-- task list -->
    <div class="task-list" v-if="filter === 'all'">
      <p>you have {{ taskStore.totalTasks}} left to do</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favourites'">
      <p>you have {{ taskStore.countFavourites }} favourites left to do</p>
      <div v-for="task in taskStore.favourites" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from 'vue'
import TaskDetails from './components/TaskDetails.vue'
import TaskForm from './components/TaskForm.vue'
import { useTaskStore } from './stores/TaskStore'
export default {
  components: { TaskForm, TaskDetails },
  setup() {
    const taskStore = useTaskStore()
    //fetch tasks
    taskStore.getTasks()
    const filter = ref('all')

    return { taskStore, filter }
  }
}
</script>
