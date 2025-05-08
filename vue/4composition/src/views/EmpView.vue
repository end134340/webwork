<script>
import EmpForm from '../components/EmpForm.vue';
import EmpList from '../components/EmpList.vue';
export default {
  data() {
    return {
      selectedEmp: {
        first_name: 'test'
      }
    }
  },
  components: {
    EmpForm, 
    EmpList
  }, 
  methods: {
    selectHandler(emp){
      this.selectedEmp = emp;
    },
    savedHandler(){
      this.$refs.listRef.fetchList();
    }
  }
  
}
</script>

<template>
  <div class="row">
    <div class="col">
      <EmpList @select="selectHandler" ref="listRef" />
    </div>
    <div class="col">
      <EmpForm :selectEmp="selectedEmp" @saved="savedHandler"  />
    </div>
  </div>
</template>