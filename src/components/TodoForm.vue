<template>
    <form @submit.prevent="addItemAndCLear(todo)">
        <input class="input" v-model="todo" type="text"> <button class="button">Add</button>
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
/* bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 */

.input {
    /* width: 100%; */
    width: 20rem;
    background-color: rgb(229 231 235);
    border-width: 2px;
    border-color: rgb(229 231 235);
    border-radius: 0.25rem;
    padding: 0.25rem 0.5rem;
    color: rgb(55 65 81);
    line-height: 1.25;
}

.input:focus {
    background-color: #fff;
    border-color: rgb(59 130 246);
    outline: 2px solid transparent;
    outline-offset: 2px;
}

.button {
    background-color: #4299e1;
    color: white;
    padding: 0.35rem 1.5rem;
    border-radius: 0.5rem;
}

.button:hover {
    background-color: #2b6cb0;
}
</style>