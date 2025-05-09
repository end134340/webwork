<template>
  <h4>댓글 목록</h4>
  <div class="comment-section">

    <!-- 댓글 리스트 -->
    <div v-if="comments.length <= 0">
      <h4>등록된 댓글이 없습니다.</h4>
    </div>
    <div class="comment-list" v-else>
      <div class="comment-item" v-for="comment in comments" :key="comment.no">
        <div class="comment-header">
          <div>
            <span class="writer">{{ comment.writer }}</span>
            <span class="date">{{ comment.created_dt.substr(0, 10) }}</span>
          </div>
          <div class="comment-actions">
          </div>
        </div>
        <div class="comment-content">{{ comment.content }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref, defineProps, watch } from 'vue';

const props = defineProps({bno:Number})
const comments = ref([]);

const getComment = async (bno) => {
  let result = await axios.get(`/api/comment/${bno}`);
  comments.value = result.data;
}

watch(
    () => props.bno, // 감시할 대상 (getter 함수 형태로)
    (newBno) => { // 변경 감지 시 실행될 콜백
      if (newBno) {
        getComment(newBno);
      }
    }
  );

onMounted(()=>{
  if(props.bno){
    console.log(props.bno)
    getComment(props.bno);
  }
})

</script>

<style>
.comment-section {
  width: 100%;
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