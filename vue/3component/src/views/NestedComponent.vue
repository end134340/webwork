<script>
//컴포넌트 사용 절차: 사용할 컴포넌트 import 후 components에 등록, template에서 태그처럼 불러 사용.
// import PageTitle from '../components/PageTitle.vue'; //상대경로로 찾아오기
import PageTitle from '@/components/PageTitle.vue'; //절대경로로 찾아오기(@/: 절대경로.)
import BlogPost from '@/components/BlogPost.vue';

export default {
  components: {
    PageTitle,
    BlogPost
  },
  data() {
    return {
      title : '동적 페이지 이름',
      post: {title: 'vue 블로그', likes: 20, isShow: true, commentIds: [10, 20, 60]},
      posts: [ {isPublished: false, title: '블로그1'}, 
      {isPublished: true, title: '블로그2'},
      {isPublished: true, title: '블로그3'}
      ]
    }
  }
}
</script>

<template>
  <div>
    <!-- <PageTitle title="마이페이지" subtitle="주문내역"/> 정적 prop 전달. -->
    <PageTitle v-bind:title="title"/> <!--동적으로 prop을 전달할 때에는 v-bind를 사용.-->
    <!-- <blog-post :title="post.title" :likes="post.likes" :is-published="post.isShow"
    :comment-ids="post.commentIds" /> 배열로 넘기기. -->
    <!--숫자를 전달할 때에는 bind만 가능.-->
    <blog-post :likes="17" :is-published="false"
     :comment-ids="['아이고', '데이고', '점심뭐먹지']"/> <!--정적으로 넘기기 -->
     <blog-post :post="post"/>
    <blog-post v-for="post in posts" :post="post" />

  </div>
</template>