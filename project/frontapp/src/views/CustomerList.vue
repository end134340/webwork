<template>
  <div class="container">
    <h1>고객 목록</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>이름</th>
          <th>이메일</th>
          <th>전화번호</th>
          <th>주소</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <td>{{ customer.id }}</td>
          <td>{{ customer.name }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.phone }}</td>
          <td>{{ customer.address }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      customers: [],
    }
  },
  methods: {
    getCustomers(){
      axios.get('/api/customers')
      .then(response => {
        this.customers = response.data;
      })
    }
  },
  mounted() {
    this.getCustomers();
  }
}
</script>

<style scoped>
/* .container {
  width: 100%; 
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  background-color: #f9f9f9;
} */

h1 {
  color: #bcaeff;
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border: 1px solid #bcaeff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

thead {
  background-color: #bcaeff;
  color: white;
}

th, td {
  padding: 12px 16px;
  border-top: 1px solid #eaeaea;
  text-align: left;
}

tbody tr:hover {
  background-color: #f3efff;
}

th:nth-child(2),
td:nth-child(2) {
  min-width: 100px; /* 필요하면 더 늘려도 돼 */
}
</style>