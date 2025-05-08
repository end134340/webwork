<script>
let id = 0;
import TodoItem from '../components/TodoItem.vue';
export default {
  components: {
    TodoItem
  },
  data() {
    return {
      todos: [
        { id: id++, text: 'HTML 배우기', done: true },
        { id: id++, text: 'JavaScript 배우기', done: true },
        { id: id++, text: 'Vue 배우기', done: false }
      ]
    }
  },
  methods: {
  }
}
</script>

<template>
    <input required placeholder="new todo">
    <button>Add Todo</button>
  <ul>
    <TodoItem v-for="todo in todos" :todo="todo" />
  </ul>
</template>