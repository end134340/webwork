//vuex를 이용해 만드는 공용 데이터 store

import {
  createStore
} from 'vuex' //store를 하나 생성

const store = createStore({
  state() { //프로젝트 전체에서 공통으로 사용할 변수
    return {
      count: 0,
      loginYN: false,
      email: ''
    } //return값들이 모든 컴포넌트에서 사용 가능
  },
  mutations: { //state를 변경하는 역할. methods:{}와 같음.
    increment(state) {
      state.count++;
    },
    loginSuccess(state) {
      state.loginYN = true;
    },
    changeEmail(state, payload) { //첫번째로 변수, 두번째로 인수를 넘겨받아 state의 값을 교체.
      console.log(payload)
      state.email = payload.email;
    }
  },
  actions: { //이 안에서는 mutation을 한번에 여러개 넣을 수 있음.
    //여러개의 값을 한 번에 변경 가능함.
    login(context, payload){
      context.commit('changeEmail', payload);
      context.commit('loginSuccess');
    }
  }
})
export default store; //=> store 만들고 여기서 export 한 뒤 main.js에서 app.use로 등록