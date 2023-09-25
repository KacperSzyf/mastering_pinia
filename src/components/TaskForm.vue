<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="i need to ..." v-model="newTask" />
    <button>add</button>
  </form>
</template>

<script setup lang="ts">
import { useTaskStore } from '@/stores/TaskStore'
import { ref } from 'vue'

const taskStore = useTaskStore()
const newTask = ref('')

const handleSubmit = () => {
  if (newTask.value.length > 0) {
    taskStore.addTask({
      title: newTask.value,
      isFav: false,
      id: Math.floor(Math.random() * 10000)
    })
    newTask.value = ''
  }
}
</script>
