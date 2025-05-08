<template>
 <div>onMounted: {{ itemLength }}</div>
</template>

<script setup>
  import { inject, onMounted } from 'vue';

  const itemLength = inject('itemLength') 
  //부모 컴포넌트에서 Provide로 넘겨준 값을 Inject로 받아옴.
  onMounted(() => { //function 앞에 붙이면 에러남.
    console.log('itemLength=', itemLength);
  })
</script>