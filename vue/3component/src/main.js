// import './assets/main.css'
import 'bootstrap'; // 앞에 /가 없으면 설정 파일? 패키지에서 import
import 'bootstrap/dist/css/bootstrap.min.css';

import { createApp } from 'vue'
import App from './App.vue' // @/나 ./는 src 폴더에서 가져옴.
import router from './router'
import { createPinia } from 'pinia'

//vuetify를 전역객체?로 등록.
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})
//객체 생성
const pinia = createPinia()

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(vuetify) //
app.mount('#app')
