<template>
  <div class="text-center pa-4">
    <v-data-table :items="cars"></v-data-table>
    <v-pagination v-model="page" :length="17" rounded="circle" :total-visible="5" next-icon="mdi-menu-right"
      prev-icon="mdi-menu-left" @update:modelValue="pagingHandler"></v-pagination>
    <v-btn @click="dialog = true">
      Open Dialog
    </v-btn>
    <v-dialog v-model="dialog" width="auto" @afterEnter="afterHandler">
      <v-card max-width="400" prepend-icon="mdi-update" title="Update in progress">
        <v-card-text>
          <div>
            userName <input type="text" class="form-control">
          </div>
          <div>
            userName <input type="text" class="form-control">
          </div>
          <div>
            userName <input type="text" class="form-control">
          </div>
          <div>
            userName <input type="text" class="form-control">
          </div>
        </v-card-text>
        <template v-slot:actions>
          <button class="btn btn-info" @click="insert">등록</button>
          <v-btn class="ms-auto" text="Ok" @click="dialog = false"></v-btn>
        </template>
      </v-card>
    </v-dialog>
    
    <template>
</template>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialog: false,
        page: 2,
        cars: [
    {
      name: 'Ford Mustang',
      horsepower: 450,
      fuel: 'Gasoline',
      origin: 'USA',
      price: 55000,
    },
    {
      name: 'Tesla Model S',
      horsepower: 670,
      fuel: 'Electric',
      origin: 'USA',
      price: 79999,
    },
    {
      name: 'BMW M3',
      horsepower: 503,
      fuel: 'Gasoline',
      origin: 'Germany',
      price: 70000,
    },
    {
      name: 'Audi RS6',
      horsepower: 591,
      fuel: 'Gasoline',
      origin: 'Germany',
      price: 109000,
    },
    {
      name: 'Chevrolet Camaro',
      horsepower: 650,
      fuel: 'Gasoline',
      origin: 'USA',
      price: 62000,
    },
    {
      name: 'Porsche 911',
      horsepower: 379,
      fuel: 'Gasoline',
      origin: 'Germany',
      price: 101000,
    },
    {
      name: 'Jaguar F-Type',
      horsepower: 575,
      fuel: 'Gasoline',
      origin: 'UK',
      price: 61000,
    },
    {
      name: 'Mazda MX-5',
      horsepower: 181,
      fuel: 'Gasoline',
      origin: 'Japan',
      price: 26000,
    },
    {
      name: 'Nissan GT-R',
      horsepower: 565,
      fuel: 'Gasoline',
      origin: 'Japan',
      price: 113540,
    },
    {
      name: 'Mercedes-AMG GT',
      horsepower: 523,
      fuel: 'Gasoline',
      origin: 'Germany',
      price: 115900,
    },
  ]
      }
    },
    methods: {
      insert(){
        alert('등록되었습니다.')
        this.dialog = false;
      },
      afterHandler(){
        //모달 열 때 필요한것들... fetch 라던가? @afterEnter="handler"로 모달 열릴때 이벤트를 걸 수 있음.
        console.log('모달이 열렸습니다.')
      },
      pagingHandler(p){
        console.log('현재 페이지:', p);
        console.log('페이지:', this.page);
      }
    }
  }
</script>