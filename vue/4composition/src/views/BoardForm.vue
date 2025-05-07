<template>
  <div class="container">
    <form @submit.prevent ref="form">
      <label for="no">No.</label>
      <input type="text" id="no"  readonly v-model="board.id" />

      <label for="title">제목</label>
      <input type="text" id="title" v-model="board.title" />

      <label for="writer">작성자</label>
      <input type="text" id="writer" v-model="board.writer" />

      <label for="content">내용</label>
      <textarea
        id="content"
        v-model="board.content"
        style="height: 200px"
      >{{ board.content }}</textarea>

      <div v-if="board.id > 0">
        <label for="regdate">작성일자</label>
        <input type="text" id="created_date" readonly :value="dateFormat()" />
      </div>

      <button
        type="button"
        class="btn btn-xs btn-info"
        @click="updateBoard(board.id)">
        저장
      </button>
    </form>
  </div>
</template>
<script setup>
   import axios from 'axios';
   import { ref } from 'vue';
   import { useRoute, useRouter } from 'vue-router';

   const router = useRouter();
   const route = useRoute();

   const board = ref({});
  
   function getBoard(id) {
     axios.get(`/api/board/${id}`)
       .then(response => {
         board.value = response.data[0];
       })
   };

   function updateBoard(id) {
     let param = {
       title: this.board.title,
       content: this.board.content,
       writer: this.board.writer
     };

     if (id > 0) {
       //수정
       axios.put(`/api/board/${id}`, param)
         .then(response => {
           if (response.data) {
             alert('정상적으로 수정되었습니다.');
             router.push('/boardList');
           } else {
             alert('문제가 있어 수정되지 못했습니다.');
           }
         })
     } else {
       //등록
       axios.post('/api/board', param)
         .then(response => {
           alert('정상적으로 등록되었습니다.');
           router.push('/boardList');
         })
     }
   }
   function dateFormat() {
     // let date = this.getFormatDate(new Date(this.board.created_date))
     // console.log(date);
     return this.board.created_date.substr(0, 10);
   }

   let id = route.params.id;
   if (id > 0) {
     getBoard(id)
   }
</script>


<style scoped>
/* Style inputs with type="text", select elements and textareas */
input[type="text"],
select,
textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical; /* Allow the user to vertically resize the textarea (not horizontally) */
}

/* Style the submit button with a specific background color etc */
button[type="button"] {
  background-color: #04aa6d;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* When moving the mouse over the submit button, add a darker green color */
button[type="button"]:hover {
  background-color: #45a049;
}

/* Add a background color and some padding around the form */
.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>
