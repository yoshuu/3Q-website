<script setup>
// 全國性活動
import { GET } from "@/api/api.js";

const respond = await GET(
  "/%E5%85%A8%E5%9C%8B%E6%80%A7%E6%B4%BB%E5%8B%95?maxRecords=100&view=Grid%20view"
);
const data = respond.data.records;
</script>

<template>
  <div class="nationalEvent">
    <div class="content_header">
      <div>日期</div>
      <div>性質</div>
      <div>名稱</div>
    </div>
    <div class="nationalEvent_content" v-for="item in data" :key="item.id">
      <div>
        <p>
          {{ item.fields.日期 }}
        </p>
      </div>
      <div>
        <p>
          {{ item.fields.性質 }}
        </p>
      </div>
      <div>
        <p>
          {{ item.fields.名稱 }}
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.nationalEvent {
  width: 100%;
  overflow: auto;
  background-color: #e0e0e0;
  > div {
    display: grid;
    gap: 16px;
    grid-template-columns: (100px 100px 1fr);
    padding: 14.5px 16px;
    margin-top: 1px;
    font-size: 17px;
    background-color: white;
  }
  > div:nth-child(1) {
    background-color: $primary;
    color: white;
  }
}
</style>
