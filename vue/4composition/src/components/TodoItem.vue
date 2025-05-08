<script>
export default {
  props: [ 
    'todo'
  ],
  data(){
    return {

    }
  },
  methods: {

  }
}
</script>

<template>
<li :key="todo.id">
  {{ todo.text }}
      <button @click="">X</button>
  </li>
</template>