<template>
    <div v-for="todo in todoList" :key="todo.id">
        <div class="">{{ todo.item }}</div>
    </div>
</template>

<script setup lang="ts">
import { useTodoListStore } from "@/stores/useTodoListStore";
import { storeToRefs } from "pinia";

const store = useTodoListStore()

const { todoList } = storeToRefs(store)
</script>

<style scoped></style>