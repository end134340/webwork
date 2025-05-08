<script>
import axios from 'axios'; //외부 패키지 imoport할때에는 이름만 적음
  axios.defaults.baseURL = 'http://localhost:3000'
  
export default {
 
  data() {
    return {
      emps: []
    }
  },
  methods: {
    fetchList(){
      axios.get('/emp')
      .then(response => {
        this.emps = response.data;
      })
    },
    deleteEmp(id){
      axios.delete('/emp/' + id)
      .then(()=> {
        this.fetchList();
      })
    },
    selectHandler(idx){
      //$emit이 들어감
      this.$emit('select', this.emps[idx])
    }
  },
  mounted() {
    this.fetchList();
  }
}
</script>

<template>
      <table class="table">
    <thead>
      <tr>
        <th>사번</th>
        <th>이름</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(emp, idx) in emps" :key="emp.id" @click="selectHandler(idx)">
        <td>{{ emp.id }}</td>
        <td>{{ emp.first_name }} {{ emp.last_name }}</td>
        <td>
          <button @click="deleteEmp(emp.id)" class="ml-4 text-red-600">
            삭제
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>