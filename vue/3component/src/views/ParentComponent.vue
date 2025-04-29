<script>
  import ChildComponent from '../components/ChildComponent.vue';

  export default {
    components: {
      ChildComponent //필드명과 변수명이 같으면 필드명을 생략 가능. 
      //필드명을 다르게 쓰고 싶으면 ""붙이고...함.
    },
    mounted(){
      this.$refs.child_component.childFunc(); 
      //this.$refs => 부모의 참조를 가리킴 ref 속성에 접근. child component를 가리킴.
      this.$refs.child_component.$refs.btn.click();
      //부모에서 자식에 접근해서, 자식에게 있는 ref에 접근.
      this.$refs.child_component.msg = '부모에서 바꾼 자식 메시지';
      //부모에서 자식에 접근해, data()의 내용을 바꿈.
      
    }
  }
</script>

<template>
  <h3>부모 컴포넌트</h3>
  <ChildComponent ref="child_component" /> 
  <!--ref로 컴포넌트 안에서 자식에 직접 접근 가능-->
</template>