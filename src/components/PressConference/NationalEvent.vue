<script setup>
// 全國性活動
import { GET } from "@/api/api.js";

const respond = await GET(
  "/%E5%85%A8%E5%9C%8B%E6%80%A7%E6%B4%BB%E5%8B%95?maxRecords=3&view=Grid%20view"
);
const data = respond.data.records;
</script>

<template>
  <div class="nationalEvent">
    <div class="Side_nav_box" v-for="item in data" :key="item.id">
      <h2>日期：{{ item.fields.日期 }}</h2>
      <h2>類別：{{ item.fields.名稱 }}</h2>
      <h2>性質：{{ item.fields.性質 }}</h2>
    </div>
  </div>
</template>
<style scoped lang="scss">
.nationalEvent {
  width: 100%;
  overflow: auto;
}
</style>
