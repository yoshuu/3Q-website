<script setup>
// 第三會期
import { GET } from "@/api/api.js";
const respond = await GET(
  "/%E6%9C%83%E5%8B%98%E5%8F%8A%E5%9C%B0%E6%96%B9%E5%BB%BA%E8%A8%AD(%E7%AC%AC%E4%B8%89%E6%9C%83%E6%9C%9F)?maxRecords=50&view=Grid%20view"
);

const data = respond.data.records;
</script>
<template>
  <div class="main-proposal">
    <div v-for="item in data" :key="item.id">
      <h2>{{ item.fields.參與單位 }}</h2>
      <h2>{{ item.fields.結論與照片 }}</h2>
    </div>
  </div>
</template>
<style scoped lang="scss">
.main-proposal {
  overflow: auto;
  @include breakpoint($lg) {
    width: 100%;
  }
}
</style>
