<script setup>
//活動及社會公益 => 地方公益活動
import { GET } from "@/api/api.js";
const respond = await GET(
  "/%E5%9C%B0%E6%96%B9%E5%85%AC%E7%9B%8A%E6%B4%BB%E5%8B%95?maxRecords=50&view=Grid%20view"
);
const data = respond.data.records;
const breakLine = (s) => {
  if (s == undefined) {
    return;
  } else {
    return s.split("\n");
  }
};
</script>
<template>
  <div
    class="modal fade"
    id="CharitableActivity"
    tabindex="-1"
    aria-labelledby=""
    aria-hidden="true"
    style="display: none"
  >
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title" id="exampleModalFullscreen">
            活動及社會公益
          </h4>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body p-0">
          <div class="charitable_activity">
            <div class="charitable_activity_header">
              <div>活動名稱</div>
              <div>活動區域</div>
              <div>性質</div>
              <div>活動時間</div>
              <div>活動地點</div>
              <div>合作單位</div>
              <div>相關連結</div>
              <div>活動內容</div>
            </div>
            <div
              class="charitable_activity_content"
              v-for="item in data"
              :key="item.id"
            >
              <div>
                <p>
                  {{ item.fields.活動名稱 }}
                </p>
              </div>
              <div>
                <p>
                  {{ item.fields.活動區域 }}
                </p>
              </div>
              <div>
                <p>
                  {{ item.fields.性質 }}
                </p>
              </div>
              <div>
                <p>
                  {{ item.fields.活動時間 }}
                </p>
              </div>
              <div>
                <p>
                  {{ item.fields.活動地點 }}
                </p>
              </div>
              <div>
                <p>
                  {{ item.fields.合作單位 }}
                </p>
              </div>
              <div>
                <div v-if="item.fields.相關連結1">
                  <div>
                    <a target="_blank" :href="item.fields.相關連結1">
                      {{ item.fields.標題1 }}
                    </a>
                  </div>
                  <div v-if="item.fields.相關連結2">
                    <a target="_blank" :href="item.fields.相關連結2">
                      {{ item.fields.標題2 }}
                    </a>
                  </div>
                  <div v-if="item.fields.相關連結3">
                    <a target="_blank" :href="item.fields.相關連結3">
                      {{ item.fields.標題3 }}
                    </a>
                  </div>
                  <div v-if="item.fields.相關連結4">
                    <a target="_blank" :href="item.fields.相關連結4">
                      {{ item.fields.標題4 }}
                    </a>
                  </div>
                  <div v-if="item.fields.相關連結5">
                    <a target="_blank" :href="item.fields.相關連結5">
                      {{ item.fields.標題5 }}
                    </a>
                  </div>
                </div>
              </div>
              <div v-if="item.fields.活動內容" class="case_content">
                <p v-for="item in breakLine(item.fields.活動內容)">
                  {{ item }}
                </p>
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
.charitable_activity {
  background-color: $primary;
  overflow: scroll;
  width: 1920px;
  @include breakpoint($xl) {
    padding-left: 30px;
  }
  > div {
    display: grid;
    grid-template-columns: (15% 5% 5% 10% 5% 10% 5% 1fr);
    width: 100%;
    padding: 14.5px 16px;
    font-size: 17px;
    background-color: white;
    border-bottom: 1px solid #e0e0e0;
    a {
      color: $primary;
    }
  }
  > div:nth-child(1) {
    background-color: $primary;
    color: white;
  }
}
</style>
