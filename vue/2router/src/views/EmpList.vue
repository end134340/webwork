<script>
  import axios from 'axios';
export default {
  data() {
    return {
      employees: []
    }
  },
  mounted(){
    axios.get('/empdata.json')
    .then(response => {
      console.log(response.data);
      this.employees = response.data;
    })
    .catch(err => console.error(err))
  }
}

</script>

<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="(value, key) in employees[0]">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="emp in employees">
          <td>{{ emp.employee_id }}</td>
          <td>{{ emp.first_name }}</td>
          <td>{{ emp.last_name }}</td>
          <td>{{ emp.email }}</td>
          <td>{{ emp.salary }}</td>
        </tr>
      </tbody>
    </table>
  </div>

</template>