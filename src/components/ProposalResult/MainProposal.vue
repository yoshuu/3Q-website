<script setup>
import { GET } from "@/api/api.js";
const respond = await GET(
  "/%E6%B3%95%E5%BE%8B%E4%B8%BB%E6%8F%90%E6%A1%88?maxRecords=100&view=Grid%20view"
);

const data = respond.data.records;
</script>
<template>
  <div class="main-proposal">
    <div
      class="proposal_result_content"
      v-for="(item, apple) in data"
      :key="item.id"
    >
      <div class="BaseInfo">
        <p class="case_name">
          {{ apple + 1 }}
          {{ item.fields.提案名稱 }}
        </p>
        <div class="case_info">
          <span> 提案日期：{{ item.fields.提案日期 }} </span>
        </div>
      </div>
      <div class="case_content">
        <p class="case_subtitle">內容關鍵字:</p>
        <p>{{ item.fields.內容關鍵字 }}</p>
      </div>
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

.navbar-expand-lg .side_nav {
  @include breakpoint($lg) {
    width: 30%;
  }
}
.proposal_result_content {
  padding: 16px;
  border-bottom: 20px solid #a63f24;
}
</style>
