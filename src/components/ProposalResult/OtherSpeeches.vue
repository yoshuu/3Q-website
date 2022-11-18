<script setup>
//其他國會發言
import { GET } from "@/api/api.js";
const respond = await GET(
  "https://api.airtable.com/v0/app4NIZthoTlA3i05/%E5%85%B6%E4%BB%96%E5%9C%8B%E6%9C%83%E7%99%BC%E8%A8%80?maxRecords=100&view=Grid%20view"
);

const data = respond.data.records;
</script>
<template>
  <div class="main-proposal">
    <div v-for="item in data" :key="item.id">
      <h2>{{ item.fields.時間 }}</h2>
      <h2>{{ item.fields.主辦單位 }}</h2>
      <h2>{{ item.fields.事由 }}</h2>
      <h2>{{ item.fields.YT連結 }}</h2>
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
