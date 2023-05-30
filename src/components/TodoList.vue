<template>
    <div v-for="(todo, i) in todoList" :key="todo.id" style="margin-top: 1rem;">
        <table>
            <tbody>
                <tr>
                    <td style="width: auto;">{{ `${i + 1} . ` }}</td>
                    <td style="width: 11rem;"><span :class="{ completed: todo.completed }">{{ todo.item }}</span></td>
                    <td class="button"><span @click.stop="toggleComplete(todo.id)">&#10004;</span></td>
                    <td class="button"><span @click.stop="deleteItem(todo.id)">&#10060;</span></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { useTodoListStore } from "@/stores/useTodoListStore";
import { storeToRefs } from "pinia";

const store = useTodoListStore()
const { todoList } = storeToRefs(store)
const { toggleComplete, deleteTodo } = store

function deleteItem(id: number) {
    if (!confirm('Are you sure to delete this task?')) return
    deleteTodo(id)
}
</script>

<style scoped>
.completed {
    text-decoration: line-through;
    text-decoration-thickness: 2px;
    font-style: italic;
}

.button {
    width: 1.5rem;
    cursor: pointer;
}
</style>