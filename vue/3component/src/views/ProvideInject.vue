<template>
  <div>
    <ProvideInfectChild></ProvideInfectChild>
  </div>
</template>

<script>
  import ProvideInfectChild from '../components/ProvideInfectChild.vue';

 export default {
  components: {
    ProvideInfectChild
  }, 
  data() {
    return {
      items: ['A', 'B']
    }
  },
  provide() { //부모 컴포넌트에서 자식 컴포넌트로 
    return {
      itemLength: this.items.length
    }
  }
 }
</script>