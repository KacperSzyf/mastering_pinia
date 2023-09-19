import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      { id: 1, title: 'learn to code', isFav: false },
      { id: 2, title: 'get rid of imposter syndrome', isFav: true },
      { id: 3, title: 'find some free time', isFav: true }
    ],
    name: 'pinia tasks'
  })
})