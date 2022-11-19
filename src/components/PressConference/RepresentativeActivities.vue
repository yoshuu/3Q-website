<script setup>
// 代表性全國性活動
import { GET } from "@/api/api.js";

const respond = await GET(
  "/%E4%BB%A3%E8%A1%A8%E6%80%A7%E5%85%A8%E5%9C%8B%E6%B4%BB%E5%8B%95?maxRecords=3&view=Grid%20view"
);
const data = respond.data.records;
</script>

<template>
  <div class="nationalEvent">
    <div class="Side_nav_box" v-for="item in data" :key="item.id">
      <h2>性質：{{ item.fields.性質 }}</h2>
      <h2>日期：{{ item.fields.日期 }}</h2>
      <h2>內容概要：{{ item.fields.內容概要 }}</h2>
      <h2>照片：{{ item.fields.照片 }}</h2>
    </div>
  </div>
</template>
<style scoped lang="scss">
.nationalEvent {
  width: 100%;
  overflow: auto;
}
</style>
