<template>
<div class="container">
  <div class="row">

    <table class="table">
      <thead>
        <tr>
          <th scope="col" class="text-center">No.</th>
          <th scope="col" class="text-center">제목</th>
          <th scope="col" class="text-center">작성자</th>
          <th scope="col" class="text-center">작성일자</th>
          <th scope="col" class="text-center">댓글 수</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="board in boards" :key="board.no" @click="goToInfo(board.no)">
          <td scope="col" class="text-center">{{ board.no }}</td>
          <td scope="col" class="text-center">{{ board.title }}</td>
          <td scope="col" class="text-center">{{ board.writer }}</td>
          <td scope="col" class="text-center">{{ board.created_dt.substr(0, 10) }}</td>
          <td scope="col" class="text-center"  >{{ board.cnt }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';
 
const router = useRouter();
const route = useRoute();

const boards = ref([]);

const getBoards = async () => {
  let result = await axios.get('/api/board');
  boards.value = result.data;
}

const goToInfo = (no) => {
  router.push(`/boardInfo/${no}`);
}


onMounted(()=>{
  getBoards();
})


</script>

<style>
</style>