<template>
  <div class="container">
    <div class="row">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col" class="text-center table-primary">번호</th>
            <td scope="col" class="text-center">{{ board.id }}</td>
            <th scope="col" class="text-center table-primary">작성일</th>
            <td scope="col" class="text-center">
              {{ board.created_date }}
            </td>
            <th scope="col" class="text-center table-primary">이름</th>
            <td scope="col" class="text-center">{{ board.writer }}</td>
          </tr>

          <tr>
            <th colspan="2" class="text-center table-primary">제목</th>
            <td colspan="4">{{ board.title }}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="6" class="text-left" valign="top" height="200">
              <pre
                style="white-space: pre-wrap;
                  border: none;
                  background-color: white; ">{{ board.content }}</pre>
            </td>
          </tr>
          <tr>
            <td colspan="6" class="text-center">
              <button class="btn btn-xs btn-info" @click="goToUpdate(board.id)">
                수정
              </button>
              <button class="btn btn-xs btn-light" @click="goToList()">
                목록
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <CommentComp :bid="board.id"  />
      </div>
    </div>
    <!-- 댓글 -->
    <div class="row">

    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  axios.defaults.baseURL = 'http://localhost:3000/board';
  import CommentComp from '../components/CommentComp.vue';

  export default {
    components: {
      CommentComp
    },
    data(){
      return {
        board: {},
      }
    },
    methods: {
      selectBoard(id){
        axios.get(`/${id}`)
        .then(response => {
          this.board = response.data[0];
        })
      },
      goToUpdate(id) {
        this.$router.push({ name: 'boardForm', params: {id: id}});
      },
      goToList(){
        this.$router.push({ path: '/boardList' });
      }
    },
    mounted() {
      this.id = this.$route.params.id;;
      this.selectBoard(this.id);
    }
  }

</script>
