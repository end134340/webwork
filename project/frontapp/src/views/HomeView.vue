<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <h2>로그인 횟수: {{ $store.state.count }}</h2>
    <h2>로그인 성공 여부: {{ $store.state.loginYN }}</h2>
    <h2>로그인 아이디: {{ $store.state.email }}</h2>
    <!-- script 안에서 쓸 때는 this.$store.state.count처럼 this가 필요한데 아니면 필요없음.-->
    <TheWelcome />
  </main>
</template>
