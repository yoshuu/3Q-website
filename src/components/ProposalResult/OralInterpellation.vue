<script setup>
// 書面質詢區塊
import { GET } from "@/api/api.js";
const respond = await GET(
  "https://api.airtable.com/v0/app4NIZthoTlA3i05/%E5%8F%A3%E9%A0%AD%E8%B3%AA%E8%A9%A2?maxRecords=100&view=Grid%20view"
);

const data = respond.data.records;
</script>
<template>
  <div class="OralInterpellation">
    <div class="select_container">
      <select class="base_select custom-select" id="__BVID__280">
        <option value="">主辦單位</option>
        <option value="院會">院會</option>
        <option value="財政委員會">財政委員會</option>
        <option value="內政委員會">內政委員會</option>
        <option value="交通委員會">交通委員會</option>
        <option value="經濟委員會">經濟委員會</option>
        <option value="外交及國防委員會">外交及國防委員會</option>
        <option value="司法及法制委員會">司法及法制委員會</option>
        <option value="教育及文化委員會">教育及文化委員會</option>
        <option value="社會福利及衛生環境委員會">
          社會福利及衛生環境委員會
        </option>
      </select>
    </div>
    <div class="select_container">
      <select class="base_select custom-select" id="__BVID__280">
        <option value="">性質</option>
      </select>
    </div>
    <div class="proposal_result_content">
      <div class="case_video">
        <iframe
          id="ytplayer"
          type="text/html"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/vJqlgkk7brY"
          frameborder="0"
        ></iframe>
      </div>
      <figure>
        <div class="BaseInfo">
          <p class="case_name">1.mRNA疫苗供懷孕第一線醫事人員施打</p>
          <div class="case_info">
            <span name="case_date"> 質詢時間：2021/6/11 </span
            ><span name="case_location"> 主辦單位：財政委員會 </span>
          </div>
        </div>
        <p data-v-0421096a="" class="field-content">
          建議莫德納疫苗優先使用於下列對象：孕婦、自體免疫相關疾病、血液、凝血、血栓相關疾病的民眾。
        </p>
        <!---->
      </figure>
    </div>
    <div class="btn-more">讀取更多</div>
    <div class="empty-space"></div>
  </div>
</template>

<style></style>
