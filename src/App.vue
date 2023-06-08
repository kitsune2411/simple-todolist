<script setup lang="ts">
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';

function print() {
  window.print()
}
</script>

<template>
  <main>
    <div class="form">
      <div class=" no-print" style="display: inline-flex;">
        <TodoForm /> <button @click="print" class="export-btn">Print</button>
      </div>
      <div class="" id="printContent">
        <TodoList />
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 75vh;
  padding-top: 10rem;
}

.form {
  /* width: 100%; */
  /* margin-top: 5rem; */
  display: grid;
  justify-content: center;
  align-content: center;
}

.export-btn {
  /* background-color: ; */
  margin-left: 1rem;
}

@media (min-width: 1024px) {}

@media print {
  .no-print {
    display: none !important;
  }
}
</style>
