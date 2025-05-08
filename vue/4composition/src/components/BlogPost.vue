<script setup>

import { defineProps } from 'vue';

const props = defineProps({
  title: {type: String},
  likes: {type: Number},
  isPublished: Boolean,
  commentIds: Array
});

</script>

<template>
  <div class="card">
    <div class="card-header">
      {{ props.title }}
    </div>
    <div class="card-body">
      <!-- {{ post.content }} -->
        좋아요: {{ props.likes }}
        <div v-if="props.isPublished">출판</div>
        <div v-else>편집중</div>
        <div v-for="comment in props.commentIds">{{ comment }}</div>
    </div>
  </div>
</template>