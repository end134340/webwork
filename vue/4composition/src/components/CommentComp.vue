<template>
  <h4>댓글</h4>
  <div class="comment-section">
    <!-- 댓글 입력 폼 -->
    <div class="comment-form">
      <input type="text" placeholder="작성자" v-model="comment.writer" class="input-writer" />
      <textarea placeholder="댓글을 입력하세요." v-model="comment.content" class="input-content"></textarea>
      <div class="btn-container">
        <button @click="updateComment(comment.id)" class="btn-submit">저장</button>
      </div>
    </div>

    <!-- 댓글 리스트 -->
    <div v-if="comments.length <= 0">
      <h4>등록된 댓글이 없습니다.</h4>
    </div>
    <div class="comment-list" v-else>
      <div class="comment-item" v-for="comment in comments" :key="comment.id">
        <div class="comment-header">
          <div>
            <span class="writer">{{ comment.writer }}</span>
            <span class="date">{{ comment.created_date.substr(0, 10) }}</span>
          </div>
          <div class="comment-actions">
            <button class="btn-edit" @click="editComment(comment.id)">수정</button>
            <button class="btn-delete" @click="deleteComment(comment.id)">x</button>
          </div>
        </div>
        <div class="comment-content">{{ comment.content }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import axios from 'axios';
  import {
    ref,
    watch,
    onMounted
  } from 'vue';

  const comments = ref([]);
  const comment = ref({});

  const props = defineProps({
    bid: Number
  })

  function getComment(bid) {
    axios.get(`/api/comment/${bid}`)
      .then(response => {
        comments.value = response.data;
      })
  }

  function updateComment(id) {
    let param = {
      writer: comment.value.writer,
      content: comment.value.content,
      bid: props.bid
    }

    if (id > 0) {
      axios.put(`/api/comment/${id}`, param)
        .then(response => {
          if (response.data.affectedRows > 0) {
            alert('댓글이 수정되었습니다.');
            getComment(props.bid);
            comment.value = {};
          } else {
            alert('문제가 있어 수정에 실패했했습니다.');
          }
        })

    } else {
      axios.post('/api/comment', param)
        .then(response => {
          if (response.data.affectedRows > 0) {
            alert('댓글이 등록되었습니다.');
            getComment(props.bid)
            comment.value = {};
          } else {
            alert('문제가 있어 등록에 실패했습니다.');
          }
        })

    }
  }

  function editComment(id) {
    axios.get(`/api/comment/info/${id}`)
      .then(response => {
        comment.value = response.data[0];
      })
  }

  function deleteComment(id) {
    if (confirm('댓글을 삭제하시겠습니까?')) {
      axios.delete(`/api/comment/${id}`)
        .then(response => {
          if (response.data.affectedRows > 0) {
            alert('댓글이 삭제되었습니다.');
            getComment(props.bid);
          } else {
            alert('문제가 있어 삭제에 실패했습니다.');
          }
        })
    }
  }
  watch(
    () => props.bid, // 감시할 대상 (getter 함수 형태로)
    (newBid) => { // 변경 감지 시 실행될 콜백
      if (newBid) {
        getComment(newBid);
      }
    }
  );

  // 컴포넌트가 마운트될 때 댓글을 불러옴
  onMounted(() => {
    if (props.bid) {
      getComment(props.bid);
    }
  });
</script>

<style>
.comment-section {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 1rem;
  border-top: 2px solid #ccc;
}

.comment-form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.input-writer,
.input-content {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
}

.input-content {
  resize: vertical;
  min-height: 60px;
}

.btn-submit {
  align-self: flex-end;
  background-color: #bcaeff;
  color: white;
  padding: 0.4rem 0.9rem;
  font-size: 0.85rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.btn-submit:hover {
  background-color: #9e96f0;
}

.comment-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.comment-item {
  background-color: #f9f9f9;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 0.75rem;
}

.writer {
  font-weight: bold;
}

.date {
  font-style: italic;
  font-size: 0.85rem;
  color: #888;
  margin-left: 10px;
}

.comment-content {
  font-size: 1rem;
  color: #333;
}
.comment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.3rem;
  font-size: 0.9rem;
  color: #555;
}

.comment-actions {
  display: flex;
  gap: 0.3rem;
}

.btn-edit,
.btn-delete {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.85rem;
  color: #888;
  padding: 0 0.4rem;
  border-radius: 3px;
  padding: 3px 5px;  

}

.btn-edit:hover {
  color: #dbfff1;
  padding: 3px 5px;  
  background-color: #ceafff;

}

.btn-delete:hover {
  color: red;
  background-color: #ffecec;
}
.btn-container {
  display: flex;
  justify-content: flex-end; /* 오른쪽 정렬. 중앙이면 center */
  margin-top: 0.5rem;
}

</style>