import { defineStore } from 'pinia'

export type Task = {
  id: number
  title: string
  isFav: boolean
}

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      { id: 1, title: 'learn to code', isFav: false },
      { id: 2, title: 'get rid of imposter syndrome', isFav: true },
      { id: 3, title: 'find some free time', isFav: true }
    ],
    name: 'pinia tasks'
  }),
  getters: {
    favourites(): Array<Task> {
      return this.tasks.filter((task) => task.isFav)
    },
    countFavourites(): number {
      return this.favourites.length
    },
    totalTasks: (state) => {
      return state.tasks.length
    }
  },
  actions: {
    addTask(task: Task) {
      this.tasks.push(task)
    },
    removeTask(taskId: number) {
      this.tasks = this.tasks.filter((task) => {
        return task.id !== taskId
      })
    },
    toggleFav(taskId: number) {
      const task: Task | undefined = this.tasks.find(t => t.id === taskId)
      if(task){
        task.isFav = !task.isFav
      }
    }
  }
})
