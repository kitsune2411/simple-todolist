<template>
    <div v-for="todo in todoList" :key="todo.id">
        <div class="">
            <span :class="{ completed: todo.completed }">{{ todo.item }}</span>
            <span @click.stop="toggleComplete(todo.id)">&#10004;</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTodoListStore } from "@/stores/useTodoListStore";
import { storeToRefs } from "pinia";

const store = useTodoListStore()

const { todoList } = storeToRefs(store)

const { toggleComplete } = store
</script>

<style scoped>
.completed {
    text-decoration: line-through;
}
</style>