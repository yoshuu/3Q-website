<script setup>
// import { RouterLink, RouterView } from "vue-router";
import Title from "./components/Title.vue";
</script>

<template>
  <h1>佳憲測試中</h1>
  <Suspense>
    <Title></Title>
  </Suspense>
</template>

<style scoped lang="scss">
h1 {
  color: $primary;
}
</style>
