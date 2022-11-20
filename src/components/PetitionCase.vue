<script setup>
// 陳情案件
import { GET } from "@/api/api.js";
import { ref } from "vue";

const respond = await GET(
  "%E9%81%B8%E6%9C%8D%E9%99%B3%E6%83%85%E6%A1%88%E4%BB%B6?maxRecords=12&view=Grid%20view"
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
const breakLine = (s) => {
  if (s == undefined) {
    return;
  } else {
    return s.split("\n");
  }
};
const isShow = ref(true);
</script>
<template>
  <div
    class="modal fade"
    id="exampleModalFullscreen3"
    tabindex="-1"
    aria-labelledby="exampleModalFullscreenLabel"
    aria-hidden="true"
    style="display: none"
  >
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title" id="exampleModalFullscreen">
            陳情案件
            <span>因涉及民眾敏感個人資料，僅呈現精選 12 則 </span>
          </h4>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body p-0 petition_case">
          <div
            class="petition_case_content"
            v-for="(item, index) in data"
            :key="item.id"
          >
            <div class="case_container">
              <p v-if="item.fields.案件標題 != undefined" class="case_name">
                {{ index + 1 }}.{{ item.fields.案件標題 }}
              </p>
              <div class="case_info">
                <p v-if="item.fields.性質 != undefined">
                  性質：{{ item.fields.性質 }}
                </p>
                <p v-if="item.fields.時間 != undefined">
                  時間：{{ item.fields.時間 }}
                </p>
                <p v-if="item.fields?.['陳情來源/區域'] != undefined">
                  陳情來源/區域：{{ item.fields?.["陳情來源/區域"] }}
                </p>
                <p v-if="item.fields.時間 != undefined">
                  主責單位：{{ item.fields.主責單位 }}
                </p>
              </div>
              <div
                v-if="item.fields.案件內容 != undefined"
                class="case_content"
              >
                <p>案件內容：</p>
                <p v-for="item in breakLine(item.fields.案件內容)">
                  {{ item }}
                </p>
              </div>
              <div v-if="item.fields.照片 != undefined" class="case_photo_list">
                <p>照片：</p>
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
                      <div v-if="index === 3">
                        <img :src="data.url" alt="" />
                        <button class="count_more" @click="isShow = !isShow">
                          <p>+{{ item.fields.照片.length - 4 }}</p>
                        </button>
                      </div>
                      <div v-else-if="index === 4" :class="{ show: isShow }">
                        <img :src="data.url" alt="" />
                        <button
                          class="count_more"
                          v-if="item.fields.照片.length > 6"
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
              <div class="other_link">
                <div v-if="item.fields.相關連結1 != undefined">
                  <p>相關連結：</p>
                  <div>
                    1.<a target="_blank" :href="item.fields.相關連結1">
                      {{ item.fields.相關連結1 }}
                    </a>
                  </div>
                  <div v-if="item.fields.相關連結2 != undefined">
                    2.<a target="_blank" :href="item.fields.相關連結2">
                      {{ item.fields.相關連結2 }}
                    </a>
                  </div>
                  <div v-if="item.fields.相關連結3 != undefined">
                    3.<a target="_blank" :href="item.fields.相關連結3">
                      {{ item.fields.相關連結3 }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.modal-header {
  padding: 0;
  background-color: #a63f24;
  h4 {
    font-weight: bold;
    font-size: 24px;
    color: white;
    span {
      margin-left: 16px;
      vertical-align: middle;
      font-size: 12px;
    }
    @include breakpoint($xl) {
      font-size: 36px;
    }
  }
  h4 {
    padding: 17px 30px;
  }
  a {
    padding: 25px 30px;
    :hover {
      transform: rotate(180deg);
    }
  }
}
.modal-header .btn-close {
  margin-right: 0;
  padding: 16px;
  opacity: unset;
  background: transparent
    url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23FFF'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e")
    center/1em auto no-repeat;
  &:focus {
    box-shadow: unset;
  }
}
.petition_case_content {
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
  .case_name,
  .case_content p:nth-child(1),
  .other_link p:nth-child(1),
  .case_photo_list p {
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
</style>
