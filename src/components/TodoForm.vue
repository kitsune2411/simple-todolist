<template>
    <form @submit.prevent="addItemAndCLear(todo)">
        <input v-model="todo" type="text"> <button>Add</button>
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

<style scoped></style>