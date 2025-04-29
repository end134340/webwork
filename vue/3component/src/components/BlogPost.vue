<script>
  export default {
    props: { //props 객체로 받아오기.
      title: {type: String, default: '기본타이틀'},
      likes: {type: Number, validator: function(value){ //validator: 유효성 검사. 함수.
                                                         //value로는 likes가 넘어옴.
        return value > 0 //return을 boolean값으로 넘겨줘야 함.
      } },
      isPublished: {
        type: Boolean, required: true //required: 반드시 넘겨줘야할때

      },
      commentIds: Array
    }
    /*props: 
    //[
      // 'title', 'likes', 'isPublished', 'commentIds'
    'post'
    ] // -가 있으면 안되고 카멜케이스로 해야하나봄*/
  }
</script>

<template>
  <div class="card">
    <div class="card-header">
      {{ title }}
    </div>
    <div class="card-body">
      <!-- {{ post.content }} -->
        좋아요: {{ likes }}
        <div v-if="isPublished">출판</div>
        <div v-else>편집중</div>
        <div v-for="comment in commentIds">{{ comment }}</div>
    </div>
  </div>
</template>