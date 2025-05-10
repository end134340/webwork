<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const book = ref({});
const fileInput = ref(null);

const router = useRouter();
const route = useRoute();

const getBook = async (id) => {
  let result = await axios.get(`/api/books/${id}`)
  book.value = result.data[0];
}

let goToList = () => {
  router.push('/bookList');
}

const updateBook = async (id) => {
  const formData = new FormData();
  formData.append("title", book.value.title);
  formData.append("writer", book.value.writer);
  formData.append("pub_date", book.value.pub_date);
  formData.append("isbn", book.value.isbn);
  formData.append("book_desc", book.value.book_desc);
  formData.append("image", book.value.image);
  
  if (id > 0) {
    //책 수정
    let result = await axios.put(`/api/books/${id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" }
    })
    if (result.data.affectedRows > 0) {
      alert('도서가 수정되었습니다.');
      router.push(`/bookInfo/${id}`);
    } else {
      alert('도서가 수정되지 않았습니다.');
    }
  } else {
    //책 등록
    let result = await axios.post('/api/books', formData, {
      headers: { "Content-Type": "multipart/form-data" }
    })
    if (result.data.affectedRows > 0) {
      alert('도서가 등록되었습니다.');
      router.push('/bookList');
    } else {
      alert('도서가 등록되지 못했습니다.');
    }
  }
}

const fileChange = () => {
  const file = fileInput.value.files[0];
  book.value.image = file;
}

let id = route.params.id;
if(id > 0){
  getBook(id);
}


</script>

<template>
<div class="container mt-5">
  <h3 class="fw-bold mb-4" style="color: #6b4c9a;">도서 등록 📝</h3>

  <div class="mb-3">
    <label for="title" class="form-label">제목</label>
    <input type="text" id="title" v-model="book.title" class="form-control" required />
  </div>

  <div class="mb-3">
    <label for="writer" class="form-label">저자</label>
    <input type="text" id="writer" v-model="book.writer" class="form-control" required />
  </div>

  <div class="mb-3">
    <label for="pub_date" class="form-label">출간일</label>
    <input type="text" id="pub_date" v-model="book.pub_date" class="form-control" required />
  </div>

  <div class="mb-3">
    <label for="isbn" class="form-label">ISBN</label>
    <input type="text" id="isbn" v-model="book.isbn" class="form-control" required />
  </div>

  <div class="mb-3">
    <label for="book_desc" class="form-label">소개</label>
    <textarea id="book_desc" v-model="book.book_desc" class="form-control" rows="5" required></textarea>
  </div>

  <div class="mb-3">
    <label for="image" class="form-label">도서 이미지</label>
    <input type="file" class="form-control" ref="fileInput" @change="fileChange" />
  </div>

  <div class="d-flex justify-content-between">
    <button type="button" @click="updateBook(book.id)" class="btn text-white" style="background-color: #efe2ff;">
      {{ id ? '수정' : '등록' }}
    </button>
    <button type="button" @click="goToList" class="btn text-dark" style="background-color: #d2fcfc;">
      목록으로
    </button>
  </div>
</div>
</template>

<style scoped>
.custom-btn {
  background-color: #f8f4ff;
  color: #6b4c9a;
  border: 2px solid #6b4c9a;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.custom-btn:hover {
  background-color: #6b4c9a;
  color: #fff;
  border-color: #6b4c9a;
}
</style>