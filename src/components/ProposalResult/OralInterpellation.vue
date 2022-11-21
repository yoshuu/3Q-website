<script setup>
// 書面質詢
import { GET } from "@/api/api.js";
const respond = await GET(
  "/%E6%9B%B8%E9%9D%A2%E8%B3%AA%E8%A9%A2?maxRecords=50&view=Grid%20view"
);

const data = respond.data.records;
</script>
<template>
  <div class="OralInterpellation">
    <div
      class="proposal_result_content"
      v-for="(item, index) in data"
      :key="item.id"
    >
      <p class="case_name">
        <span>{{ index + 1 }}.</span>
        摘要：{{ item.fields.摘要 }}
      </p>
      <div class="case_info">
        <span> 日期：{{ item.fields.日期 }} </span>
      </div>

      <div class="case_content">
        <p class="case_subtitle">案由:</p>
        <p>{{ item.fields.案由 }}</p>
      </div>
    </div>
    <div v-for="item in data" :key="item.id">
      <h2></h2>
      <h2></h2>
      <h2></h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.OralInterpellation {
  width: 100%;
  overflow: auto;
}
.proposal_result_content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  border-bottom: 20px solid #a63f24;
  @include breakpoint($xl) {
    padding: 50px 54px;
  }
}
.case_name {
  font-size: 17px;
  font-weight: 700;
}
.case_info {
  font-size: 13px;
  color: #828282;
  font-weight: 400;
}
.case_content {
  font-size: 17px;
  font-weight: 400;
  line-height: 30.6px;
}
</style>
