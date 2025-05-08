<template>
  <div>
    <button @click="incrementChild">
      <slot></slot>
    </button> 
    <button @click="incrementChild">handler 이용 {{counter}}</button> 
   <button @click="$emit('incrementevent', 1)"> emit 인수 {{counter}}</button>
   <button @click="$emit('incrementevent')">emit {{counter}}</button> 
   <button @click="this.counter++">직접변경안됨 {{counter}}</button>  
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps(['counter']);
const emit = defineEmits(['incrementevent']);

const incrementChild = () => {
  emit('incrementevent', props.counter + 1)
}

</script>


