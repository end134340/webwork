import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
  //state = data(){ return { count: 0, name: 'Eduardo'}}와 같음
  state: () => ({ userid: 'end', grade: 'admin' }),
  getters: { //단순 조회 //생략 가능.
  //   doubleCount: (state) => state.count * 2,
  },
  //actions = methods:{}와 같음
  actions: { //바꾸는거
    increment() {
      this.count++
    },
    setUserId(userid){
      this.userid = userid;
    }
  },
})