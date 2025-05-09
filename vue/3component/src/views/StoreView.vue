<template>
  <h2>userid: {{ userid }}</h2>
  <h2>grade: {{ grade }}</h2>
  <button class="btn-success" @click="increment">증가</button>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useCounterStore } from "../stores/counter.js";
import { useUserStore } from "@/stores/user.js";
export default {
  computed: {
    //computed()는 getters 프로퍼티가 됨.
    ...mapState(useCounterStore, ["name", "count"]),
    ...mapState(useUserStore, ["grade", "userid"]),
    //mapState: state를 가져와 꺼내쓰는거
  },
  //methods function()은 actions 프로퍼티가 됨.
  methods: {
    ...mapActions(useCounterStore, ["increment"]), //store에 있는 actions를 실행
    //mapActions: actions를 가져와 꺼내쓰는거
  },
};
// mapState는 Pinia 스토어의 state를 반응형으로 가져오는 헬퍼 함수입니다.
// useCounterStore: 우리가 만든 Pinia 스토어입니다.
// ["name", "count"]: 그 스토어에서 가져올 state 속성입니다.
// ...: 전개 연산자로, 반환되는 객체의 속성들을 개별로 꺼내 쓰기 위함입니다.
</script>