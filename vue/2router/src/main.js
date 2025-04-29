// import './assets/main.css'
import 'bootstrap' //js
import 'bootstrap/dist/css/bootstrap.min.css' //css

import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'; //인덱스는 생략 가능(시작되면 제일 먼저 실행되는 파일이기 때문?)

createApp(App)
.use(router)
.mount('#app')
