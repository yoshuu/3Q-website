<script setup>
import { GET } from "@/api/api.js";

const apple = await GET(
  "/%E5%90%84%E8%B3%87%E6%96%99%E6%95%B8%E9%87%8F?maxRecords=3&view=Grid%20view"
);
console.log(apple);
const book = apple.data.records;
const ggg = book[0].fields.名稱;
</script>
<template>
  <div v-for="item in book" :key="item.id">
    <h1>我的時間a{{ item.fields.名稱 }}</h1>
    <h2>再來一次{{ item.fields.資料數量 }}</h2>
  </div>
</template>
<style scoped></style>
