<script setup>
// 總覽
import { GET } from "@/api/api.js";
const respond = await GET(
  "/%E6%9C%83%E5%8B%98%E5%8F%8A%E5%9C%B0%E6%96%B9%E5%BB%BA%E8%A8%AD(%E4%B8%80%E8%A6%BD)?maxRecords=50&view=Grid%20view"
);

const data = respond.data.records;
</script>
<template>
  <div class="main">
    <div v-for="item in data" :key="item.id">
      <h2>{{ item.fields.內容 }}</h2>
      <h2>{{ item.fields.辦理日期 }}</h2>
      <h2>{{ item.fields.性質 }}</h2>
      <h2>{{ item.fields.當天照片 }}</h2>
    </div>
  </div>
</template>
<style scoped lang="scss">
.main {
  overflow: auto;
  @include breakpoint($lg) {
    width: 100%;
  }
}
</style>
