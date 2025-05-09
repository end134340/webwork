//Pinia 이용.
import { defineStore } from "pinia"

export const useCounterStore = defineStore('counter', {
  //state = data(){ return { count: 0, name: 'Eduardo'}}와 같음
  state: () => ({ count: 0, name: 'Eduardo' }),
  getters: { //단순 조회
    doubleCount: (state) => state.count * 2,
  },
  //actions = methods:{}와 같음
  actions: { //바꾸는거
    increment() {
      this.count++
    },
  },
})