<script>
export default {
      data() {
        return {
          movies: [],
          date: ''
        }
      },
      methods: {
        getMovie(date){
          fetch(
            'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=12664b24453335d2c3eca0fdc4b3b013&targetDt=' + date
            )
          .then(response => response.json())
          .then(response => {
            this.movies = response.boxOfficeResult.dailyBoxOfficeList;
          })
        },

        searchDate() {
          this.getMovie(this.date);
        }
      },
      mounted() {
        this.getMovie('20250423');
      }
    }
</script>

<template>
<input type="text" @keydown.enter="searchDate" v-model="date"> 
<button class="btn btn-info" @click="searchDate">조회</button>
    <table class="table">
      <tr>
        <th>랭킹</th>
        <th>영화 제목</th>
        <th>개봉일</th>
      </tr>
      <tr v-for="movie in movies">
        <td>{{movie.rank}}위</td>
        <td>{{movie.movieNm}}</td>
        <td>{{movie.openDt}}</td>
      </tr>
    </table>
</template>

<style>
table,
    th,
    tr,
    td {
      border: 1px solid #ccc;
      border-collapse: collapse;
      padding: 3px;
    }
    table {
      margin-top: 10px;
      width: 600px;
    }
</style>