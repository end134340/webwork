<script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import axios from 'axios';
  import CommentComp from '../components/CommentList.vue';
  
  const route = useRoute();
  const router = useRouter();

  const board = ref({});

  const getBoard = async (no) => {
    let result = await axios.get(`/api/board/${no}`)
    board.value = result.data[0];
    board.value.created_dt = result.data[0].created_dt.substr(0, 10);
  }

  const goToUpdate = (no) => {
    router.push(`/boardForm/${no}`);
  }

  onMounted(() => {
    let no = route.params.no;
    getBoard(no);
  })
</script> 

<template>
  <div class="container">
    <div class="row">

      <table class="table">
        <thead>

          <tr>
            <th scope="col" class="text-center table-primary">번호</th>
            <td scope="col" class="text-center">{{ board.no }}</td>
            <th scope="col" class="text-center table-primary">작성일</th>
            <td scope="col" class="text-center">{{ board.created_dt }}</td>
            <th scope="col" class="text-center table-primary">이름</th>
            <td scope="col" class="text-center">{{ board.writer }}</td>
          </tr>
          <tr>
            <th scope="col" class="text-center table-primary">제목</th>
            <td colspan="5">{{ board.title }}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="6" class="text-left" valign="top" height="200">
              <pre style="white-space: pre-wrap;
                  border: none;
                  background-color: white; ">{{ board.content }}
              </pre>
            </td>
          </tr>
          <tr>
            <td colspan="6" class="text-center">
              <button class="btn btn-primary" type="button" @click="goToUpdate(board.no)">수정</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <CommentComp :bno="board.no" />
      </div>
    </div>
  </div>
</template>