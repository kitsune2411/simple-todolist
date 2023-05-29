<script setup lang="ts">
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';
</script>

<template>
  <main>
    <div class="form">
      <TodoForm />
      <TodoList />
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100vh;

}

.form {
  margin-top: 5rem;
  display: grid;
  justify-content: center;
  align-content: center;
}

@media (min-width: 1024px) {}
</style>
