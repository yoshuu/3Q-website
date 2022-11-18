<script setup>
// 法律共同提案
import { GET } from "@/api/api.js";

const respond = await GET(
  "/%E6%B3%95%E5%BE%8B%E5%85%B1%E5%90%8C%E6%8F%90%E6%A1%88?maxRecords=100&view=Grid%20view"
);
const data = respond.data.records;
</script>
<template>
  <div class="JointProposal">
    <div class="proposal_result_content" v-for="item in data" :key="item.id">
      <p class="case_name">
        {{ item.fields.提案名稱 }}
      </p>
      <div class="case_info">
        <span> 提案日期：{{ item.fields.提案日期 }} </span>
      </div>

      <div class="case_content">
        <p class="case_subtitle">內容關鍵字:</p>
        <p>{{ item.fields.內容關鍵字 }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.JointProposal {
  overflow: auto;
  @include breakpoint($lg) {
    width: 100%;
  }
}

.side_nav {
  @include breakpoint($lg) {
    width: calc(100% - 300px);
    margin-left: auto;
    padding-top: unset;
  }
}
.proposal_result_content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  border-bottom: 20px solid #a63f24;
  @include breakpoint($lg) {
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
