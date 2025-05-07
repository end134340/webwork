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
</template>

<script>
  import axios from 'axios';

  export default {
    data(){
      return {
        boards: []
      }
    },
    methods: {
      async boardList(){ //아래 await가 실행될 때까지 기다리는 함수.
        let result = await axios.get('/api/board') //동기식으로 처리
        this.boards = result.data;
        
      },
      goToDetail(id) { //라우터(index.js에 작성한 path로 이동하게 만드는 코드.)
        //query: ?id=1    param: boardInfo/1
        this.$router.push({ name: 'boardInfo',  params: { id: id } });
      },
      goToForm() {
        this.$router.push({ path: '/boardForm' });

      }
    },
    mounted(){
      this.boardList();
    }
  }
</script>

<style scoped>
table * {
  text-align: center;
}
</style>
