<template>
  <h3>부모 컴포넌트</h3>
  <ChildComponent @send-message="sendMessage" /> 
</template>

<script>
  import ChildComponent from '../components/ChildComponent2.vue';

  export default {
    components: {
      ChildComponent //필드명과 변수명이 같으면 필드명을 생략 가능. 
      //필드명을 다르게 쓰고 싶으면 ""붙이고...함.
    },
    methods: {
      sendMessage(message){
        console.log(message)
      }
    }
  }
</script>
