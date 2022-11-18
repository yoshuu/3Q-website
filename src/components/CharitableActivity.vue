<script setup>
//活動及社會公益 => 地方公益活動
import { GET } from "@/api/api.js";

const respond = await GET(
  "/%E5%9C%B0%E6%96%B9%E5%85%AC%E7%9B%8A%E6%B4%BB%E5%8B%95?maxRecords=50&view=Grid%20view"
);
const data = respond.data.records;
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
          <div class="Side_nav_box" v-for="item in data" :key="item.id">
            <p>{{ item.fields.活動內容 }}</p>
            <p>{{ item.fields.性質 }}</p>
            <p>{{ item.fields.活動地點 }}</p>
            <p>{{ item.fields.活動區域 }}</p>
            <p>{{ item.fields.活動時間 }}</p>
            <p>{{ item.fields.標題1 }}</p>
            <p>{{ item.fields.相關連結1 }}</p>
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
</style>
