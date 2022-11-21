<script setup>
import { ref } from "vue";
import NationalEvent from "./PressConference/NationalEvent.vue";
import RepresentativeActivities from "./PressConference/RepresentativeActivities.vue";
import { CountTo } from "vue3-count-to";
import { GET } from "@/api/api.js";
defineProps(["flag3"]);

const respond = await GET(
  "https://api.airtable.com/v0/app4NIZthoTlA3i05/%E5%90%84%E8%B3%87%E6%96%99%E6%95%B8%E9%87%8F?maxRecords=30&view=Grid%20view"
);

const data = respond.data.records;

const data1 = data[6].fields.資料數量;
const data2 = data[12].fields.資料數量;

const currentTab = ref("NationalEvent");

const tabs = {
  NationalEvent,
  RepresentativeActivities,
};
</script>
<template>
  <div
    class="modal fade"
    id="PressConference"
    tabindex="-1"
    aria-labelledby="exampleModalFullscreenLabel"
    aria-hidden="true"
    style="display: none"
  >
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title" id="exampleModalFullscreen">主辦記者會</h4>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body p-0">
          <div class="Side_nav_box">
            <nav class="navbar-expand-lg side_nav">
              <div class="side_nav-active">
                <a
                  href="##"
                  :class="{ active: currentTab === 'NationalEvent' }"
                  @click="currentTab = 'NationalEvent'"
                  ><span>全國性活動</span>
                  <span
                    ><countTo
                      v-if="flag3"
                      :startVal="0"
                      :endVal="data1"
                      :duration="3000"
                    ></countTo
                  ></span>
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarText"
                  aria-controls="navbarText"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i class="fa-solid fa-caret-down"></i>
                </button>
              </div>
              <div class="collapse" id="navbarText">
                <a
                  href="##"
                  :class="{ active: currentTab === 'RepresentativeActivities' }"
                  @click="currentTab = 'RepresentativeActivities'"
                  ><span>代表性全國活動</span
                  ><span
                    ><countTo
                      v-if="flag3"
                      :startVal="0"
                      :endVal="data2"
                      :duration="3000"
                    ></countTo
                  ></span>
                </a>
              </div>
            </nav>
            <Suspense>
              <component :is="tabs[currentTab]"></component>
            </Suspense>
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
    @include breakpoint($lg) {
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

.side_nav {
  background-color: $primary;
  @include breakpoint($lg) {
    max-width: 300px;
    height: 100%;
    width: 30%;
  }
}
.side_nav a,
.side_nav-active button {
  color: white;
  &:focus {
    color: $primary;
    background: white;
  }
}
.side_nav a {
  display: block;
  padding: 17.5px 16px;
  font-size: 17px;
  font-weight: bold;
  @include breakpoint($lg) {
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    padding: 22.5px 30px;
  }
}
.side_nav div + div,
.side_nav a + a {
  border-top: 1px solid white;
}
.side_nav-active {
  display: flex;
  justify-content: space-between;
  a {
    flex-grow: 1;
  }
  i {
    padding: 16px;
  }
}
.side_nav a span + span {
  padding-left: 8px;
}
.collapse {
  @include breakpoint($lg) {
    display: block !important;
  }
}

.Side_nav_box {
  height: 100%;
  @include breakpoint($lg) {
    display: flex;
  }
}

.side_nav .active {
  color: $primary;
  background: white;
}
</style>
