<script setup>
//代表性地方建設
import { GET } from "@/api/api.js";

const respond = await GET(
  "/%E4%BB%A3%E8%A1%A8%E6%80%A7%E5%9C%B0%E6%96%B9%E5%BB%BA%E8%A8%AD?maxRecords=50&view=Grid%20view"
);
const data = respond.data.records;
</script>
<template>
  <div class="Representative">
    <div v-for="item in data" :key="item.id">
      <h2>{{ item.fields.建設標題 }}</h2>
      <h2>{{ item.fields.主責單位 }}</h2>
      <!-- <h2>{{ item.fields.陳情來源／區域 }}</h2> -->
      <h2>{{ item.fields.標題 }}</h2>
      <h2>{{ item.fields.案件內容 }}</h2>
      <h2>{{ item.fields.相關連結 }}</h2>
    </div>
  </div>
</template>
<style scoped lang="scss">
.Representative {
  overflow: auto;
  @include breakpoint($lg) {
    width: 100%;
  }
}
</style>
