<template>
  <div class="container">
    <div class="row">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col" class="text-center table-primary">번호</th>
            <td scope="col" class="text-center">{{ board.id }}</td>
            <th scope="col" class="text-center table-primary">작성일</th>
            <td scope="col" class="text-center">
              {{ board.created_date }}
            </td>
            <th scope="col" class="text-center table-primary">이름</th>
            <td scope="col" class="text-center">{{ board.writer }}</td>
          </tr>

          <tr>
            <th colspan="2" class="text-center table-primary">제목</th>
            <td colspan="5">{{ board.title }}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="6" class="text-left" valign="top" height="200">
              <pre style="white-space: pre-wrap;
                  border: none;
                  background-color: white; ">{{ board.content }}</pre>
            </td>
          </tr>
          <tr>
            <td colspan="6" class="text-center">
              <button class="btn btn-xs btn-info" @click="goToUpdate(board.id)">
                수정
              </button>
              <button class="btn btn-xs btn-light" @click="goToList()">
                목록
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <CommentComp :bid="board.id" />
      </div>
    </div>
    <!-- 댓글 -->
    <div class="row">

    </div>
  </div>
</template>

<script setup>
  import axios from 'axios';
  import CommentComp from '../components/CommentComp.vue'; //옵션 방식에서는 그냥 임포트하고 바로 템플릿에 쓰면됨
  import { ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';

  const board = ref({});
  const router = useRouter();
  const route = useRoute();

  function selectBoard(id) {
    axios.get(`/api/board/${id}`)
      .then(response => {
        board.value = response.data[0];
      })
  };

  function goToUpdate(id) {
    router.push(`/boardForm/${id}`)
  }

  function goToList() {
    router.push('/boardList');
  }

  let id = route.params.id;
  selectBoard(id);
</script>
