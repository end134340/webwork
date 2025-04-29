//라우터
import { createMemoryHistory, createRouter } from 'vue-router'

// import HomeView from './HomeView.vue'
// import AboutView from './AboutView.vue'
// import HelloWorld from '@/components/HelloWorld.vue';
import Home from '@/views/Home.vue';
import MemberForm from '@/views/MemberForm.vue';
import Employee from '@/views/EmpView.vue';
import Movie from '@/views/Movie.vue';
import Todo from '@/views/Todo.vue';
import ParamView from '@/views/ParamView.vue';

const routes = [ //배열로
  { path: '/', component: Home }, //url과 컴포넌트 매핑.
  { path: '/memberForm', component: MemberForm },
  { path: '/employee', component: Employee }, 
  { path: '/movie', component: Movie},
  { path: '/todo', component: Todo },
  { path: '/paramView/:username', component: ParamView }
  // /:변수 => 저기 뒤에 들어오는 건 변수로 알아서 받겠다. params로 받을때 사용.
]

const router = createRouter({ //라우터 인스턴스 생성
  history: createMemoryHistory(),
  routes,
})

export default router;