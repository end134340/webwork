<script>
 export default {
  data() {
    return {
      msg: '자식 컴포넌트로부터 보내는 메시지.'
    }
  },
  methods: {
    childFunc(){
      this.$emit('send-message', this.msg)
      //두번째 인수가 매개변수값으로 사용됨.
    }
  }
 }
</script>

<template>
  <h4>{{msg}}</h4>
  <button type="button" @click="childFunc" class="btn btn-info">click</button>
</template>