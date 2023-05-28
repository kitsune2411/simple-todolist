<template>
    <form @submit.prevent="addItemAndCLear(todo)">
        <input v-model="todo" type="text"> <button class="button">Add</button>
    </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTodoListStore } from "@/stores/useTodoListStore";
const todo = ref("")
const store = useTodoListStore()

function addItemAndCLear(item: string) {
    if (item.length === 0) return
    store.addItem(item)
    todo.value = ""
}
</script>

<style scoped>
/* bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded */
.button {
    background-color: #4299e1;
    color: white;
    padding: 0.25rem 1.25rem;
    border-radius: 0.5rem;
}

.button:hover {
    background-color: #2b6cb0;
}
</style>