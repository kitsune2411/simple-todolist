import { defineStore } from 'pinia'

interface ToDoItem {
  id: number
  item: string
  completed: boolean
}

export const useTodoListStore = defineStore('todoList', {
  state: () => ({
    todoList: [] as ToDoItem[],
    id: 0,
    showAlert: false
  }),
  actions: {
    addItem(item: string) {
      this.todoList.push({ item, id: this.id++, completed: false })
    },
    deleteTodo(itemID: number) {
      this.todoList = this.todoList.filter((obj) => obj.id !== itemID)
    },
    toggleComplete(idToFind: number) {
      const todo = this.todoList.find((obj) => obj.id === idToFind)
      if (todo) todo.completed = !todo.completed
    },
    inputAlert() {
      this.showAlert = true
      const timeToALertGone = 1000
      setTimeout(() => {
        this.showAlert = false
      }, timeToALertGone)
    }
  }
})
