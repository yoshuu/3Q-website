<script setup>
// 書面質詢
import { GET } from "@/api/api.js";
const respond = await GET(
  "https://api.airtable.com/v0/app4NIZthoTlA3i05/%E6%9B%B8%E9%9D%A2%E8%B3%AA%E8%A9%A2?maxRecords=50&view=Grid%20view"
);

const data = respond.data.records;
</script>
<template>
  <div class="OralInterpellation">
    <div v-for="item in data" :key="item.id">
      <h2>摘要：{{ item.fields.摘要 }}</h2>
      <h2>日期：{{ item.fields.日期 }}</h2>
      <h2>案由:{{ item.fields.案由 }}</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.OralInterpellation {
  overflow: auto;
  @include breakpoint($lg) {
    width: 100%;
  }
}
</style>
