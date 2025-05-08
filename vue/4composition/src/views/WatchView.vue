<template>
  <div>
    <input type="text" v-model="question">
    <div>답변: {{ answer }}</div>
    <img :src="src">
    <hr>
    <div>
      바로 계산식 넣기: {{ books.length > 0 ? 'yes' : 'no' }}
    </div>
    <div>
      computed 함수 이용: {{ publishedBooksMessage }}
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';

const question = ref('');
const answer = ref('질문에는 일반적으로 물음표가 포함됩니다.');
const src = ref('');
const books = ref(['Vue 2 - Advanced Guide',
  'Vue 3 - Basic Guide',
  'Vue 4 - The Mystery'
]);

//books 변경
const publishedBooksMessage = computed( () => {
  return books.value.length > 0? 'Yes' : 'No';
}) 

// 질문이 변경될 때마다 이 함수가 실행됩니다 
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.includes('?')) { //입력값에 물음표가 포함되어 있으면 getAnswer호출.
    answer.value = '생각 중...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      const data = await res.json()
      answer.value = data.answer === 'yes' ? '네' : '아니오'
      src.value = data.image;
    } catch (error) {
      answer.value = '에러! API에 연결할 수 없습니다.' + error
    }
  }
})

</script>