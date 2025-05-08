<template>
  <div class="alert alert-warning">
    <h2>{{ title }} {{ subtitle }}</h2>
  </div>
</template>

<script>
export default {
  props: ['title', 'subtitle'], //부모 요소에서 데이터 받아옴. 배열, 객체로 가져오는 게 가능. 부모 요소에서 속성을 title로 넘기고 있기 때문에 title로 받아옴.
  // data(){ return {} },
  // methods: {},
  // mounted(){},
  // watch:{}
}
</script>