<script setup>
//代表性地方建設
import { GET } from "@/api/api.js";

const respond = await GET(
  "/%E4%BB%A3%E8%A1%A8%E6%80%A7%E5%9C%B0%E6%96%B9%E5%BB%BA%E8%A8%AD?maxRecords=50&view=Grid%20view"
);
const data = respond.data.records;
const Youtube = (s) => {
  if (!s) return;
  return s.includes("youtube");
};
const transfer = (s) => {
  if (s == undefined) {
    return;
  } else if (s.includes("youtube") == true) {
    return s.replace("watch", "embed");
  }
};
</script>
<template>
  <div class="Representative">
    <div class="representative_content" v-for="item in data" :key="item.id">
      <div class="case_container">
        <p class="case_name">
          {{ item.fields.建設標題 }}
        </p>
        <div class="case_info">
          <p>陳情來源／區域：{{ item.fields?.["陳情來源／區域"] }}</p>
          <p>主責單位：{{ item.fields.主責單位 }}</p>
        </div>
        <div class="case_content">
          <p>{{ item.fields.標題 }}<span>內容：</span></p>
          <p>{{ item.fields.案件內容 }}</p>
        </div>
      </div>
      <div v-if="Youtube(item.fields.相關連結) == true" class="video_container">
        <iframe
          class="youtube_container"
          width="100%"
          :src="transfer(item.fields.相關連結)"
        ></iframe>
      </div>
      <div class="other_link" v-else-if="item.fields.相關連結 != undefined">
        <p>相關連結：</p>
        <p>
          <a target="_blank" :href="item.fields.相關連結">
            {{ item.fields.相關連結 }}
          </a>
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.Representative {
  width: 100%;
  overflow: auto;

  .representative_content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    border-bottom: 20px solid #a63f24;
    @include breakpoint($xl) {
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
    @include breakpoint($xl) {
      flex-shrink: 0;
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
}
.case_name,
.case_content p:nth-child(1),
.other_link p:nth-child(1) {
  font-size: 17px;
  font-weight: 700;
}
.other_link {
  order: 2;
  a {
    color: $primary;
  }
}
</style>
