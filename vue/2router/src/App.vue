<script>
  // import goods from './components/goods.vue';
  // import MemberForm from './views/MemberForm.vue';
  // import Employee from './views/Employee.vue';
  // import Todo from './views/Todo.vue';
  // import Movie from './views/Movie.vue';
  import { RouterLink, RouterView } from 'vue-router';

  export default {
    components: { //사용할 components 선언
      // goods,
      // MemberForm
      // Employee
      // Todo
      // Movie
    },
    data(){
      return{
        fruits: [
          '복숭아',
          '바나나',
          '망고',
          '오렌지'
        ],
        message: 'Vue~~'
      }
    },
    methods: {

    }
  }

</script>


<template>
  <div class="container">
    <h1>Hello App!</h1>
    <p>
      <strong>Current route path:</strong> {{ $route.fullPath }}
    </p>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <RouterLink to="/" class="nav-link active " aria-current="page">Home</RouterLink>              
              </li>
              <li class="nav-item">
                  <RouterLink to="/memberForm" class="nav-link " aria-current="page">회원가입</RouterLink>
              </li>
              <li class="nav-item">
                  <RouterLink to="/employee" class="nav-link " aria-current="page">사원</RouterLink>
              </li>
              <li class="nav-item">
                  <RouterLink to="/movie" class="nav-link " aria-current="page">박스오피스 순위</RouterLink>
              </li>
              <li class="nav-item">
                  <RouterLink to="/todo" class="nav-link " aria-current="page">할 일</RouterLink>
              </li>
              <li class="nav-item">
                  <RouterLink to="/paramView/bori" class="nav-link " aria-current="page">파라미터1</RouterLink>
              </li>
              <li class="nav-item">
                  <RouterLink to="/paramView/ssal" class="nav-link " aria-current="page">파라미터2c</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    <main>
      <RouterView />
    </main>
</div>
</template>