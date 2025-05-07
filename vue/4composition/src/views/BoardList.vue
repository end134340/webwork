<template>
  <div class="container">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>No.</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일자</th>
          <th>댓글 수</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(board, i) in boards" :key="board.id"
        @click="goToDetail(board.id)">
          <td>{{ board.id }}</td>
          <td>{{ board.title }}</td>
          <td>{{ board.writer }}</td>
          <td>{{ board.created_date }}</td>
          <td>{{ board.comment }}</td>
        </tr>
      </tbody>
    </table>
    <button type="button" @click="goToForm">
      등록
    </button>
  </div>
  <div>{{ route.fullPath }}</div>
</template>

<script setup> //composition방식으로 변경
  import axios from 'axios';
  import { ref } from 'vue';
  import { useRouter,  useRoute } from 'vue-router';

  const router = useRouter(); //이 방식은 전역객체?가 없어서 사용하려면 import를 해줘야함.
  const route = useRoute();
  const boards = ref([]); //기존에 data(){}속성에 있던 걸 변수로 선언.

  const boardList = async () => { //아래 await가 실행될 때까지 기다리는 함수.
    let result = await axios.get('/api/board') //동기식으로 처리
    boards.value = result.data; //ref는 참조객체? 이기 때문에 value속성을... 그거해야하는가봄
  };
  //위의거랑 밑의거랑 같음
  function goToDetail(id) {
    router.push(`/boardInfo/${id}`); //라우터 사용.
  }

  function goToForm(){
    router.push('/boardForm');
  }

  boardList();
</script>

<style scoped>
table * {
  text-align: center;
}
</style>
