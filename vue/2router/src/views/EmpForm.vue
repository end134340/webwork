<script>
 export default {
      data() {
        return {
          depts: [{
              dno: 10,
              dname: "개발"
            },
            {
              dno: 20,
              dname: "인사"
            },
            {
              dno: 30,
              dname: "총무"
            },
          ],
          emp: {
            employee_id: "100",
            first_name: "길동",
            last_name: "홍",
            email: "",
            phone_number: "",
            hire_date: "",
            job_id: "",
            salary: "",
            commission_pct: "",
            manager_id: "",
            department_id: "20",
            fullname: ""
          }
        }
      },
      methods: {
        empUpdate() {
          console.log(JSON.stringify(this.emp));
        }
      },
      computed: {
        fullname(){
          return this.emp.first_name + this.emp.last_name;
        }
      }
    }
</script>

<template>
  <div class="card">
    <div class="card-body">
      <div class="mb-3">
        <label class="form-label">이름: </label>
        <div class="form-control-plaintext">{{ fullname }}</div>
      </div>

      <div class="mb-3">
        <label class="form-label">사번</label>
        <input type="text" v-model="emp.employee_id" class="form-control" />
      </div>

      <div class="mb-3">
        <label class="form-label">이름</label>
        <input v-model="emp.first_name" class="form-control" />
      </div>

      <div class="mb-3">
        <label class="form-label">부서</label>
        <select id="deptSelect" v-model="emp.department_id" class="form-select">
          <option v-for="dept in depts" :value="dept.dno">{{ dept.dname }}</option>
        </select>
      </div>

      <div class="mb-3">
        <label class="form-label">직무</label>
        <div class="form-check">
          <input class="form-check-input" type="radio" v-model="emp.job_id" value="it" id="job_it">
          <label class="form-check-label" for="job_it">IT</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" v-model="emp.job_id" value="sales" id="job_sales">
          <label class="form-check-label" for="job_sales">SALES</label>
        </div>
      </div>

      <div class="d-flex justify-content-end">
        <button type="button" class="btn btn-primary" @click="empUpdate()">수정</button>
      </div>
    </div>
  </div>
</template>

<style>
 
</style>