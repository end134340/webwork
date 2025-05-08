<script>
 export default {
  data() {
    return {
      msg: '자식 컴포넌트로부터 보내는 메시지.'
    }
  },
  methods: {
    childFunc(){
      console.log('부모 컴포넌트에서 직접 발생시킨 이벤트')
    }
  }
 }
</script>

<template>
  <h4>{{msg}}</h4>
  <button type="button" ref="btn" @click="childFunc" class="btn btn-info">click</button>
</template>