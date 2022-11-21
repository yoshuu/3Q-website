<script setup>
// 第一會期
import { GET } from "@/api/api.js";
import { ref, reactive, computed } from "vue";

const respond = await GET(
  "/%E6%9C%83%E5%8B%98%E5%8F%8A%E5%9C%B0%E6%96%B9%E5%BB%BA%E8%A8%AD(%E7%AC%AC%E4%B8%80%E6%9C%83%E6%9C%9F)?maxRecords=50&view=Grid%20view"
);

const data = respond.data.records;
const breakLine = (s) => {
  if (s == undefined) {
    return;
  } else {
    return s.split("\n");
  }
};
const isShow = ref(true);

const input = reactive({
  性質: "性質",
});

const input2 = reactive({
  區域: "區域",
});

const filterData = computed(() => {
  if (input.性質 === "性質" || input2.區域 === "區域") {
    return data;
  } else {
    return data.filter((item) => {
      return (
        item.fields.性質 === input.性質 || item.fields.區域 === input2.區域
      );
    });
  }
});
</script>
<template>
  <div class="FirstSession">
    <select v-model="input.性質">
      <option value="性質" disabled>性質</option>
      <option value="性質">全部</option>
      <option value="會勘">會勘</option>
      <option value="協調會">協調會</option>
      <option value="霧峰">爭取地方發展</option>
      <option value="沙鹿">公聽會</option>
    </select>
    <select v-model="input2.區域">
      <option value="區域" disabled>區域</option>
      <option value="區域">全部</option>
      <option value="霧峰">霧峰</option>
      <option value="霧峰">霧峰</option>
      <option value="沙鹿">沙鹿</option>
      <option value="大肚">大肚</option>
      <option value="烏日">烏日</option>
      <option value="龍井">龍井</option>
      <option value="其他">其他</option>
    </select>
    <div
      class="representative_content"
      v-for="item in filterData"
      :key="item.id"
    >
      <div class="case_container">
        <p class="case_name">
          {{ item.fields.內容 }}
        </p>
        <div class="case_info">
          <p class="sort">
            <span>{{ item.fields.區域 }}</span>
            <span>{{ item.fields.性質 }}</span>
          </p>
          <p>辦理日期：{{ item.fields.辦理日期 }}</p>
          <p>參與單位：{{ item.fields.參與單位 }}</p>
        </div>
        <div v-if="item.fields.結論 != undefined" class="case_content">
          <p>結論：</p>
          <p v-for="item in breakLine(item.fields.結論)">
            {{ item }}
          </p>
        </div>
        <div v-if="item.fields.當天照片 != undefined" class="case_photo_list">
          <p>當天照片：</p>
          <div class="case_photo_container">
            <div class="four" v-if="item.fields.當天照片.length <= 4">
              <div v-for="data in item.fields.當天照片">
                <img :src="data.url" alt="" />
              </div>
            </div>
            <div :class="{ show: isShow }" class="more" v-else>
              <div v-for="data in item.fields.當天照片">
                <img :src="data.url" alt="" />
              </div>
              <!-- <button class="more_pic" @click="isShow = ! isShow"></button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.FirstSession {
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
    .case_name,
    .case_content p:nth-child(1),
    .case_photo_list p {
      font-size: 17px;
      font-weight: 700;
    }
    .case_info {
      font-size: 13px;
      color: #828282;
      font-weight: 400;
      .sort {
        display: flex;
        margin: 16px 0;
        gap: 16px;
        span {
          border-radius: 5px;
          padding: 0 15px;
          color: white;
          background-color: $primary;
        }
      }
    }
    .case_content {
      font-size: 17px;
      font-weight: 400;
      line-height: 30.6px;
    }
  }
}
.case_photo_list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  img {
    display: block;
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
  }
  .less_than_two {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    width: 100%;
  }
  .four,
  .more {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    @include breakpoint($xl) {
      flex-wrap: nowrap;
      overflow: auto;
      gap: 16px;
    }
    div {
      width: calc(50% - 4px);
      @include breakpoint($xl) {
        width: calc(20% - 12.8px);
      }
    }
  }
}

// .show {
//   height: 54.5%;
//   overflow: auto;
//   @include breakpoint($xl){
//     height:100%;

//   }
// }
// .more_pic{
//   padding: 30px;
//   position: absolute;
//   top: 0;
// }
</style>
