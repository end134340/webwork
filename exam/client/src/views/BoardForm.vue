<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

const board = ref({});

const getBoardForm = async (no) => {
  let result = await axios.get(`/api/board/${no}`)
  board.value = result.data[0];
  board.value.created_dt = result.data[0].created_dt.substr(0, 10);
}

const updateBoard = async (no) => {
  if(board.value.title == undefined){
    alert('제목을 입력하지 않으셨습니다. 다시 확인해주세요.')
    return;
  }

  let param = {
    no: board.value.no,
    title: board.value.title,
    writer: board.value.writer,
    content: board.value.content
  }

  if(no > 0){
    //수정
    let result = await axios.put(`/api/board/${no}`, param)
    if(result.data){
      alert('게시글이 수정되었습니다.');
      router.push('/boardList')
    }else{
      alert('게시글 수정에 실패했습니다.')
    }
    
  } else {
    //등록
    let result = await axios.post('/api/board', param)
    if(result.data){
      alert('게시글이 등록되었습니다.')
      router.push('/boardList');
    }else{
      alert('게시글 등록에 실패했습니다.')
    }
  }

}

const dateFormat = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth()+1;
  let day = date.getDate();

  return `${year}-${month < 10 ? '0' + month : month}-${day < 10? '0' + day : day}`
}

onMounted(() => {
  let no = route.params.no;
  if(no){
    getBoardForm(no);
  } else {
    board.value.created_dt = dateFormat();
  }
})

</script>

<template>
<div class="container">
  <div class="formdiv">
    <form @submit.prevent>
      <label for="no">No.</label>
      <input class="form-control" type="text" id="no" readonly v-model="board.no" />
      
      <label for="title">제목</label>
      <input class="form-control" type="text" id="title" v-model="board.title" required />
      
      <label for="writer">작성자</label>
      <input class="form-control" type="text" id="writer" v-model="board.writer" />
      
      <label for="content">내용</label>
      <textarea class="form-control" id="content" v-model="board.content" style="height: 200px">{{ board.content }}</textarea>
      
      <label for="regdate">작성일자</label>
      <input class="form-control" type="text" id="created_dt" v-model="board.created_dt" readonly />
      <button type="button" class="btn btn-xs btn-info" @click="updateBoard(board.no)">
        저장
      </button>
    </form>
  </div>
</div>
</template>

<style scoped>
button {
  margin-top: 5px;
}
input {
  margin-bottom: 9px;
}
.formdiv{
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  background-color: rgb(245, 238, 255);
}
</style>