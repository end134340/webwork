<script setup>
  import { onMounted, ref } from 'vue';
  import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';

  const router = useRouter();
  const route = useRoute();

  const books = ref([]);

  const getBookList = async () => {
    let result = await axios.get('/api/books');
    books.value = await result.data;
  }

  const goToInfo = (id) => {
    router.push(`/bookInfo/${id}`);
  }

  const goToForm = () => {
    router.push('/bookForm');
  }

  onMounted(()=> {
    getBookList();
  })

</script>

<template>
  <div class="container mt-5">
    <h3 class="fw-bold mb-4" style="color: #6b4c9a;">도서 목록📚</h3>
    <table class="table text-center align-middle custom-table">
      <thead>
        <tr>
          <th class="text center">제목</th>
          <th class="text center">저자</th>
          <th class="text center">출간일</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.id" @click="goToInfo(book.id)">
          <td>{{ book.title }}</td>
          <td>{{ book.writer }}</td>
          <td>{{ book.pub_date }}</td>
        </tr>
      </tbody>
    </table>
    <button @click="goToForm" type="button">등록</button>
  </div>

</template>

<style scoped>
.custom-table {
  border: 2px solid #ccc1da; /* 연보라색 외곽선 */
}

.custom-table th {
  background-color: #efe2ff; /* 연보라색 헤더 배경 */
  color: #8c64b6;             /* 헤더 글씨 진한 보라색 */
}

.custom-table td, .custom-table th {
  border: 1px solid #ccc1da; /* 셀마다 연보라 테두리 */
  font-size: 16px;
}

.custom-table tbody tr:hover {
  background-color: #e2d6ff; /* hover 시 은은한 연보라 배경 */
}
</style>