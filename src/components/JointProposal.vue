<script setup>
import { GET } from "@/api/api.js";
const respond = await GET("?maxRecords=100&view=Grid%20view");
const data = respond.data.records;
</script>
<template>
  <div class="JointProposal">
    <div class="proposal_result_content" v-for="item in data" :key="item.id">
      <div class="BaseInfo">
        <p class="case_name">
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
<style scoped></style>
