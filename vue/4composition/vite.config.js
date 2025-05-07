import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: { //개발서버라서 devServer로
    proxy: {     
    '/api': { // '/api'라는 접두어가 들어오면 프록시 서버(아래의 target)를 거쳐 들어감.
      //서버간 통신은 cors에 영향받지 않음.
    target:'http://localhost:3000', 
    changeOrigin: true 
    } 
    }
  }
})
