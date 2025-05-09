<script setup>
  import axios from 'axios';
  import { ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  const book = ref({});
  const router = useRouter();
  const route = useRoute();

  const getBookInfo = async (id) => {
    let result = await axios.get(`/api/books/${id}`);
    book.value = result.data[0];
  }

  const deleteBook = async (id) => {
    if (confirm('정말로 도서를 삭제하시겠습니까?')) {
      let result = await axios.delete(`/api/books/${id}`)
      if (result.data.affectedRows > 0) {
        alert('도서가 삭제되었습니다.');
        router.push('/bookList');
      }
    }
  }

  const goToList = () => {
    router.push('/bookList');
  }

  const goToUpdate = (id) => {
    router.push(`/bookForm/${id}`);
  }

  let id = route.params.id;
  getBookInfo(id);

</script>

<template>
   <div class="container mt-5">
    <h3 class="fw-bold mb-4" style="color: #6b4c9a;">도서 상세 정보 📖</h3>
    
    <table class="table custom-table table-borderless align-middle fs-5">
      <tbody v-if="book">
        <tr>
          <th style="width: 180px;">ID</th>
          <td>{{ book.id }}</td>
        </tr>
        <tr>
          <th >책 제목</th>
          <td>{{ book.title }}</td>
        </tr>
        <tr>
          <th >저자</th>
          <td>{{ book.writer }}</td>
        </tr>
        <tr>
          <th >출간일</th>
          <td>{{ book.pub_date }}</td>
        </tr>
        <tr>
          <th >ISBN</th>
          <td>{{ book.isbn }}</td>
        </tr>
        <tr>
          <th class="align-top">소개</th>
          <td style="white-space: pre-line;">{{ book.book_desc }}</td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="2" class="text-center text-muted">도서 정보를 불러오는 중입니다...</td>
        </tr>
      </tbody>
    </table>
    <div>
      <button @click="goToList" type="button" class="custom-btn custom-btn-list">목록으로</button>
      <button @click="goToUpdate(book.id)" type="button" class="custom-btn custom-btn-edit">수정</button>
      <button @click="deleteBook(book.id)" type="button" class="custom-btn custom-btn-delete">삭제</button>
    </div>
  </div>
</template>

<style scoped>
.custom-table th {
  background-color: #f8f4ff;
  color: #8c64b6;
  font-weight: bold;
  vertical-align: middle;
  padding-right: 16px;
  white-space: nowrap;
}

.custom-table td {
  background-color: #ffffff;
  padding-left: 16px;
}

.custom-table th, 
.custom-table td {
  border: 1px solid #b1a3c9; /* 연한 회색 테두리 */
}

.custom-btn {
  background-color: #efe5ff;
  color: #6b4c9a;
  font-size: 14px;
  border: 2px solid #efe5ff;
  padding: 3px 5px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-right: 5px;
}

.custom-btn-list {
  background-color: #f8f4ff;
  color: #6b4c9a;
}

.custom-btn-list:hover {
  background-color: #6b4c9a;
  color: #fff;
}

.custom-btn-edit {
  background-color: #d2fcfc;
  color: #6b4c9a;
}

.custom-btn-edit:hover {
  background-color: #6b4c9a;
  color: #fff;
}

.custom-btn:focus {
  outline: none;
  box-shadow: 0 0 10px rgba(107, 76, 154, 0.5);
}

.custom-btn-delete {
  background-color: #ff749e;
  color: #f9f5ff;
}

.custom-btn-delete:hover {
  background-color: #6b4c9a;
  color: #fff;
}
</style>