<template>
  <DataTable class="display" :columns="columns" ajax="/api/board"></DataTable>
</template>

<script setup > //composition 방식.
  import DataTable from 'datatables.net-vue3';
  import DataTablesCore from 'datatables.net';

DataTable.use(DataTablesCore);

const columns = [
  { data: 'id' },
  { data: 'title' },
  { data: 'writer' },
  { data: 'created_date' },
];

</script>