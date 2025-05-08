<template>
  <div>
    <div>
      useComponentrefs 이용
      <input type="text" ref="my-input" value="hello"> <!-- ref 사용 -->
    </div>

    <div>
      현재 페이지는 {{ route.fullPath }}
      <a href="#" @click="router.push('/')">home</a>
      <a href="#" @click="goPage">about</a>
    </div>

    <hr />
    {{ count.cnt }}
    <button class="btn btn-info" @click="clickHandler">클릭</button>
    
    <div>
      <ButtonCounter :counter="count.cnt" @incrementevent="clickHandler">자식 컴포넌트</ButtonCounter>
    </div>
  </div>
</template>

 <script setup>
  //카운트 값 증가
  import { onMounted, reactive, ref, useTemplateRef } from 'vue';
  import ButtonCounter from '../components/ButtonCounter.vue';
  import { useRoute, useRouter } from 'vue-router';
  
  const router = useRouter();
  const route = useRoute();
  const input = useTemplateRef('my-input'); //위쪽에 ref걸어둔것과 같은 값을 가져와 ref로 사용.

  onMounted(() => { //mounted(){} 대신에  사용할 수 있는 함수.
    console.log('count=', count.cnt);
    // input.value.focus(); //커서 들어가있는거
    input.value.select(); //블록잡혀보이는거
    console.log(input.value.value);
    //input 태그의 value값을 가지고 오고 싶으면, input.value.value를 해야함. 그냥 input.value만 하면 input 태그를 가리킴.
  });
  
  const count = reactive({
    cnt: 0
  });
  //reactive는 객체 타입으로 넣어줘야함
  const clickHandler = (initValue) => {
    //숫자값 0은 boolean값으로는 false라서, 인수가 들어올 때에만 0으로 바꿔주고 싶으면 undefined를 체크해야함.
    if (initValue >= 1) {
      count.cnt = initValue;
    } else {
      count.cnt++;
    }
  }

  const goPage = () => {
    router.push('/about');
  }

  // function clickHandler(){
  //   alert('버튼이 클릭되었습니다.')
  // }
</script>

<style scoped>
</style>