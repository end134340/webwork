<script>
  export default {
     
  }
</script>

<template>
  <h3>파라미터 연습</h3>
  <!-- <div>user: {{ $route.query.username }}</div> -->
  <!-- : username=test를 읽어옴. -->
  <div>user: {{ $route.params.username }}</div>

</template>