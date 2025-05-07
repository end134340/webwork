<template>
  <div class="container">
    <div class="loginSecion">
      id <input v-model="email">
      pw <input v-model="pw" type="password">
      <button type="button" @click="loginHandler">로그인</button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        email: '',
        pw: ''
      }
    },
    methods: {
      async loginHandler() {
        this.$store.commit('increment'); //store에 있는 mutation에 접근해 값 변경.
        //로그인 할 때마다 값 증가.
        let param = {
          email: this.email,
          pw: this.pw
        }
        //원래 axios형태: axios({url: '', method: '', data:{}})
        let result = await axios.post('/api/users/login', param) //이거는 축약형.
        //vite.config에서 /api로 들어오는 요청을 http://localhost:3000으로 보낸다고 하는 것 같음
        if (result.data.code == 'success') {
          alert('로그인 성공.');
          // this.$store.commit('changeEmail', {email: this.email}); //두번째는 넘겨줄 인수 값
          // this.$store.commit('loginSuccess');
          this.$store.dispatch('login', {email: this.email}) //액션을 이용하면 여러개의 mutation을 불러 한번에 값을 변경. 
          //커밋을 각각 부르는 게 아니라 한 번만 불러서 사용 가능.
          //액션을 사용할 때에는 dispatch 사용.
          this.$router.push({path: '/'})
        }
      }
    }
  }
</script>

<style>
 button {
  margin-left: 5px;
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
</style>