<script setup>
// 代表性全國性活動
import { GET } from "@/api/api.js";
import { ref } from "vue";

const respond = await GET(
  "/%E4%BB%A3%E8%A1%A8%E6%80%A7%E5%85%A8%E5%9C%8B%E6%B4%BB%E5%8B%95?maxRecords=100&view=Grid%20view"
);

const data = respond.data.records;
// const breakLine = (s) => {
//   if (s == undefined) {
//     return;
//   } else {
//     return s.split("\n");
//   }
// };
const isShow = ref(false);
</script>
<template>
  <div class="representative_activities">
    <div
      class="representative_activities_content"
      v-for="item in data"
      :key="item.id"
    >
      <div class="case_container">
        <p class="case_name">
          {{ item.fields.名稱 }}
        </p>
        <div v-if="item.fields.性質 != undefined" class="case_info">
          <!-- <p class="sort">
            <span>{{ item.fields.性質 }}</span>
          </p> -->
          <p v-if="item.fields.日期 != undefined">
            日期：{{ item.fields.日期 }}
          </p>
        </div>
        <!-- <div v-if="item.fields.內容概要 != undefined" class="case_content">
          <p>內容概要：</p>
          <p v-for="item in breakLine(item.fields.內容概要)">
            {{ item }}
          </p>
        </div> -->
        <div v-if="item.fields.照片 != undefined" class="case_photo_list">
          <div class="case_photo_container">
            <div class="four" v-if="item.fields.照片.length <= 4">
              <div v-for="(data, index) in item.fields.照片" :key="index">
                <img :src="data.url" alt="" />
              </div>
            </div>
            <div class="more" v-else>
              <div
                v-for="(data, index) in item.fields.照片"
                :key="index"
                :class="{ fourth_pic: index == 3, more_pic: index == 4 }"
              >
                <div v-if="index == 3">
                  <img :src="data.url" alt="" />
                  <button class="count_more" @click="isShow = !isShow">
                    :class="{ opacity: isShow }"
                    <p>+{{ item.fields.照片.length - 4 }}</p>
                  </button>
                </div>
                <div v-else-if="index == 4" :class="{ show: isShow }">
                  <img :src="data.url" alt="" />
                  <button
                    class="count_more"
                    @click="isShow = !isShow"
                    :class="{ opacity: isShow }"
                    v-if="item.fields.照片.length > 5"
                  >
                    <p>+{{ item.fields.照片.length - 5 }}</p>
                  </button>
                </div>
                <div
                  class="hide"
                  v-else-if="index > 4"
                  :class="{ show: isShow }"
                >
                  <img :src="data.url" alt="" />
                </div>
                <div v-else>
                  <img :src="data.url" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="other_link" v-if="item.fields.相關連結1 != undefined">
        <p>相關連結：</p>
        <div>
          <a target="_blank" :href="item.fields.相關連結1">
            {{ item.fields.標題1 }}
          </a>
        </div>
        <div v-if="item.fields.相關連結2 != undefined">
          <a target="_blank" :href="item.fields.相關連結2">
            {{ item.fields.標題2 }}
          </a>
        </div>
        <div v-if="item.fields.相關連結3 != undefined">
          <a target="_blank" :href="item.fields.相關連結3">
            {{ item.fields.標題3 }}
          </a>
        </div>
        <div v-if="item.fields.相關連結4 != undefined">
          <a target="_blank" :href="item.fields.相關連結4">
            {{ item.fields.標題4 }}
          </a>
        </div>
        <div v-if="item.fields.相關連結5 != undefined">
          <a target="_blank" :href="item.fields.相關連結5">
            {{ item.fields.標題5 }}
          </a>
        </div>
        <div v-if="item.fields.相關連結6 != undefined">
          <a target="_blank" :href="item.fields.相關連結6">
            {{ item.fields.標題6 }}
          </a>
        </div>
      </div> -->
    </div>
  </div>
</template>
<style scoped lang="scss">
.representative_activities {
  width: 100%;
  overflow: auto;

  .representative_activities_content {
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
.case_name,
.case_content p:nth-child(1),
.case_photo_list p,
.other_link p {
  font-size: 17px;
  font-weight: 700;
}
.other_link {
  order: 2;
  a {
    color: $primary;
  }
}
.case_photo_list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
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
    display: grid;

    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    overflow: hidden;
    width: 100%;
    gap: 8px;
    @include breakpoint($xl) {
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: unset;
      overflow: auto;
      gap: 16px;
    }
  }
}
.other_link {
  a {
    color: $primary;
  }
}
.fourth_pic,
.more_pic {
  position: relative;
  .count_more {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    color: white;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    p {
      font-size: 20px;
    }
  }
}
.fourth_pic .count_more {
  @include breakpoint($xl) {
    display: none;
  }
}
.more_pic {
  div {
    display: none;
    @include breakpoint($xl) {
      display: block;
    }
  }
  .count_more {
    display: none;
    @include breakpoint($xl) {
      display: flex;
    }
  }
}

.hide {
  display: none;
}
.show {
  display: block !important;
}
.opacity {
  &:focus {
    opacity: 0;
  }
}
</style>
