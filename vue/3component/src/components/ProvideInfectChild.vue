<template>
 <div></div>
</template>

<script>
 export default {
  inject: ['itemLength'], //부모 컴포넌트에서 Provide로 넘겨준 값을 Inject로 받아옴.
  mounted() {
    console.log(this.itemLength);
  }
 }
</script>