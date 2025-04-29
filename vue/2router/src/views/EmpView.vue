<script>
import EmpList from './EmpList.vue';
import EmpForm from './EmpForm.vue';

export default {
  components: {
    EmpList,
    EmpForm
  },
  data(){
    return {
      
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-6" id="leftList">
        <EmpList />
      </div>
      <div class="col-6" id="rightForm">
        <EmpForm />
      </div>
    </div>
  </div>
</template>

<style>

</style>