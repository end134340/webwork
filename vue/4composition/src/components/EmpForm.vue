<script>
import axios from 'axios'; //외부 패키지 imoport할때에는 이름만 적음
axios.defaults.baseURL = 'http://localhost:3000'
let id = 20;

  export default {
    props: {
    selectEmp : Object
  },
    data() {
      return {
        emp: {},
        emps: [],
        depts: []
      }
    },
    methods: {
      empUpdate() {
        if(this.emp.id){ //input태그를 가리킴
          axios.put(`/emp/${this.emp.id}`, this.emp) //emp 정보를 전송
          .then(() => {
            this.$emit('saved')
          })
        } else {
          this.emp.id = String(++id)
          axios.post('/emp/', this.emp) //emp 정보를 전송
          .then(() => {
            this.$emit('saved')
          })
        }
      },
      fetchDeptList() {
        axios.get('/dept')
          .then(response => {
            this.depts = response.data;
          })
      },
      reset(){
        this.emp = {};  
      }
    },
    watch: {
      selectEmp: {
        handler(newEmp){
          if(newEmp){
            this.emp = { ... newEmp }
          }
        }
      }
    },
    mounted(){
      this.fetchDeptList();
    }
  }
</script>

<template>
      <div>
        <h3>{{ emp ? "직원 수정" : "직원 등록" }}</h3>
        사번 : <input v-model="emp.id" class="form-control" />
        <div>
          <label>fname</label>
          <input v-model="emp.first_name" class="form-control" />
        </div>
        <div>
          <label>lname</label>
          <input v-model="emp.last_name" class="form-control" />
        </div>
        <div>
          <label>jobId</label>
          <div class="form-check">
            <input type="radio" class="form-check-input" v-model="emp.job_id" value="it" /><label
              class="form-check-label">IT</label>
          </div>
          <div class="form-check">
            <input type="radio" class="form-check-input" v-model="emp.job_id" value="sales" /><label
              class="form-check-label">SALES</label>
          </div>
        </div>
        <div>
          <label>부서</label>
          <select v-model="emp.department_id" class="form-select">
            <option v-for="dept in depts" :value="dept.id">
              {{ dept.dname }}
            </option>
          </select>
        </div>
        <div>
          <label>급여</label>
          <input class="form-control" v-model="emp.salary" />
        </div>
        <div>
          <label>이메일</label>
          <input class="form-control" v-model="emp.email" />
        </div>
        <button @click="empUpdate()" class="btn btn-success mt-2">수정</button>
        <button @click="reset()" class="btn btn-warning mt-2">초기화</button>
      </div>
</template>