<script setup>
//立院成果
import side_nav from "./side_nav.vue";
defineProps(["flag"]);
</script>
<template>
  <div
    class="modal fade"
    id="exampleModalFullscreen"
    tabindex="-1"
    aria-labelledby="exampleModalFullscreenLabel"
    aria-hidden="true"
    style="display: none"
  >
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title" id="exampleModalFullscreen">
            立院成果
            <span
              >想知道更多問政成果嗎？歡迎至
              <a
                href="https://docs.google.com/spreadsheets/d/1Hcp9VOefbP23FeBwgqXLXDAfQ_3msOD8yS6Wk1ICXhA/edit#gid=0&range=D2"
                >立法院國會圖書館</a
              >
              之「立委問政專輯」查看，3Q！」
            </span>
          </h4>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body p-0">
          <Suspense>
            <side_nav :flag="flag" />
          </Suspense>
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
    padding: 17px 30px;
    font-weight: 900;
    font-size: 24px;
    color: white;
    span {
      margin-left: 16px;
      vertical-align: middle;
      font-size: 12px;
    }
    a {
      text-decoration: underline;
      color: white;
    }
    @include breakpoint($lg) {
      font-size: 36px;
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
