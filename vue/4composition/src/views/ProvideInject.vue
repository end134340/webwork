<template>
  <div>
    <ProvideInfectChild />
  </div>
</template>

<script setup>
  import ProvideInfectChild from '../components/ProvideInfectChild.vue';
  import { ref, provide } from 'vue';

    const items = ref(['A', 'B'])
    provide('itemLength', items.value.length);
    //키, 값으로 값을 넘김.
</script>