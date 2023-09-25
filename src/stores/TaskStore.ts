import { defineStore } from 'pinia'

export type Task = {
  id: number
  title: string
  isFav: boolean
}

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [],
    loading: false,
    name: 'pinia tasks'
  }),
  getters: {
    favourites(): Array<Task> {
      return this.tasks.filter((task: Task) => task.isFav)
    },
    countFavourites(): number {
      return this.favourites.length
    },
    totalTasks: (state) => {
      return state.tasks.length
    }
  },
  actions: {
    async getTasks() {
      this.loading = true
      const res = await fetch('http://localhost:3000/tasks')
      const data = await res.json()

      this.tasks = data
      setTimeout(() => {
        this.loading = false
      }, 2000)
    },
    addTask(task: Task) {
      this.tasks.push(task)
    },
    removeTask(taskId: number) {
      this.tasks = this.tasks.filter((task) => {
        return task.id !== taskId
      })
    },
    toggleFav(taskId: number) {
      const task: Task | undefined = this.tasks.find((t) => t.id === taskId)
      if (task) {
        task.isFav = !task.isFav
      }
    }
  }
})
