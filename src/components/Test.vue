<script setup>
import { GET } from "@/api/api.js";

const apple = await GET("?maxRecords=100&view=Grid%20view");
console.log(apple);
const book = apple.data.records;
</script>
<template>
  <div v-for="item in book" :key="item.id">
    <h1>我的時間{{ item.createdTime }}</h1>
    <h2>再來一次{{ item.id }}</h2>
  </div>
</template>
<style scoped></style>
