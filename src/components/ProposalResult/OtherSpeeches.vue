<script setup>
//其他國會發言
import { GET } from "@/api/api.js";
const respond = await GET(
  "/%E5%85%B6%E4%BB%96%E5%9C%8B%E6%9C%83%E7%99%BC%E8%A8%80?maxRecords=100&view=Grid%20view"
);

const data = respond.data.records;
</script>
<template>
  <div class="main-proposal">
    <div class="proposal_result_content" v-for="item in data" :key="item.id">
      <div class="video_container">
        <iframe :src="item.fields.YT連結"></iframe>
      </div>
      <div class="case_container">
        <p class="case_name">
          {{ item.fields?.["3Q問政"] }}
        </p>
        <div class="case_info">
          <p>接案日期：{{ item.fields.時間 }}</p>
          <p>質詢場：{{ item.fields.主辦單位 }}</p>
        </div>

        <div class="case_content">
          <p>{{ item.fields.事由 }}</p>
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
}
.video_container {
  iframe {
    width: 100%;
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
