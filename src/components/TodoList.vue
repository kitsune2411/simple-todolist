<template>
    <div v-for="todo in todoList" :key="todo.id">
        <div class="">
            <span :class="{ completed: todo.completed }">{{ todo.item }}</span>
            <span @click.stop="toggleComplete(todo.id)">&#10004;</span>
            <span @click.stop="deleteItem(todo.id)">&#10060;</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTodoListStore } from "@/stores/useTodoListStore";
import { storeToRefs } from "pinia";

const store = useTodoListStore()
const { todoList } = storeToRefs(store)
const { toggleComplete, deleteTodo } = store

function deleteItem(id: number) {
    if (!confirm('Are yous sure delete this task?')) return
    deleteTodo(id)
}
</script>

<style scoped>
.completed {
    text-decoration: line-through;
}
</style>