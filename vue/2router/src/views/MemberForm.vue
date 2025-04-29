<script>
export default {
      data() {
        return {
          options: [{
              text: "가",
              value: 'A'
            },
            {
              text: "나",
              value: 'B'
            },
            {
              text: "다",
              value: 'C'
            },
            {
              text: "라",
              value: 'D'
            }
          ],
          selected: ['가', '다'], //multiple 셀렉트 //'a', //단일 셀렉트
          picked: '하나', //체크박스와는 달리 라디오는 하나의 값만 선택  가능하므로 그냥 string
          message: '',
          checked: true, //체크박스가 하나인 경우 boolean으로 제어
          checkedNames: ['마이크'] //여러개의 체크박스가 있는 경우 value에 배열이 들어감
        }
      },
      methods: {
        memberInsert(){
          alert('회원가입 완료');
          this.$router.push('/'); // == location.href와 같은...거인듯???
        }
      }
    }
</script>

<template>
  <div class="card">
    <div class="card-`body">
      <p>메세지: {{ message }}</p>
      <input class="form-control" v-model="message" placeholder="메세지 입력하기" />
      <input type="checkbox" id="checkbox" v-model="checked" />
      <label for="checkbox">{{ checked }}</label>

      <div>체크된 이름: {{ checkedNames }}</div>

      <input type="checkbox" id="jack" value="젝" v-model="checkedNames">
      <label for="jack">젝</label>

      <input type="checkbox" id="john" value="존" v-model="checkedNames">
      <label for="john">존</label>

      <input type="checkbox" id="mike" value="마이크" v-model="checkedNames">
      <label for="mike">마이크</label>

      <div>선택한 것: {{ picked }}</div>

      <input type="radio" id="one" value="하나" v-model="picked" />
      <label for="one">하나</label>

      <input type="radio" id="two" value="둘" v-model="picked" />
      <label for="two">둘</label>

      <div>선택됨: {{ selected }}</div>

      <select v-model="selected" multiple>
        <option disabled value="">다음 중 하나를 선택하세요</option>
        <option v-for="option in options" :value="option.value">{{option.text}}</option>
        <!--value값이 없으면 text값 찾음. 있으면 value 우선.-->
      </select>
      <button @click="memberInsert">등록</button>
    </div>
  </div>
</template>

<style scoped> 
/* scoped: 이 파일에서만 적용됨. */

</style>