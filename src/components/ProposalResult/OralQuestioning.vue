<script setup>
// 口頭質詢
import { GET } from "@/api/api.js";

const respond = await GET(
  "/%E5%8F%A3%E9%A0%AD%E8%B3%AA%E8%A9%A2?maxRecords=200&view=Grid%20view"
);
const data = respond.data.records;
</script>
<template>
  <div class="main-proposal">
    <div class="proposal_result_content" v-for="item in data" :key="item.id">
      <div class="video_container">
        <iframe width="100%" :src="item.fields?.['YT連結/資料連結']"></iframe>
      </div>
      <div class="case_container">
        <p class="case_name">
          {{ item.fields.title }}
        </p>
        <div class="case_info">
          <p>接案日期：{{ item.fields.質詢時間 }}</p>
          <p>質詢場：{{ item.fields.主辦單位 }}</p>
        </div>

        <div class="case_content">
          <p>{{ item.fields.內容大綱 }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.main-proposal {
  width: 100%;
  overflow: auto;
}
.proposal_result_content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border-bottom: 20px solid #a63f24;
  @include breakpoint($xl) {
    flex-direction: row;
    padding: 50px 54px;
  }
  iframe {
    aspect-ratio: 2.02/1;
    @include breakpoint($xl) {
      width: 428px;
    }
  }
}
.case_container {
  display: flex;
  flex-direction: column;
  gap: 8px;
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
}
</style>
