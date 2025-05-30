import './assets/main.css'
import 'bootstrap'; // 앞에 /가 없으면 설정 파일? 패키지에서 import
import 'bootstrap/dist/css/bootstrap.min.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
