<script setup>
import { ref } from "vue";
import Representative from "./Survey/Representative.vue";
import FirstSession from "../components/Survey/FirstSession.vue";
import SecondSession from "../components/Survey/SecondSession.vue";
import ThirdSession from "../components/Survey/ThirdSession.vue";
import Main from "../components/Survey/Main.vue";
import { CountTo } from "vue3-count-to";
import { GET } from "@/api/api.js";
defineProps(["flag2"]);

const respond = await GET(
  "https://api.airtable.com/v0/app4NIZthoTlA3i05/%E5%90%84%E8%B3%87%E6%96%99%E6%95%B8%E9%87%8F?maxRecords=30&view=Grid%20view"
);

const data = respond.data.records;

const data1 = data[4].fields.資料數量;
const data2 = data[1].fields.資料數量;
const data3 = data[2].fields.資料數量;
const data4 = data[3].fields.資料數量;
const data5 = data[13].fields.資料數量;

const currentTab = ref("Representative");

const tabs = {
  Representative,
  FirstSession,
  SecondSession,
  ThirdSession,
  Main,
};
</script>
<template>
  <div
    class="modal fade"
    id="Survey"
    tabindex="-1"
    aria-labelledby="exampleModalFullscreenLabel"
    aria-hidden="true"
    style="display: none"
  >
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title" id="exampleModalFullscreen">
            會勘及地方建設
          </h4>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body p-0">
          <div class="Side_nav_box">
            <nav class="navbar-expand-xl side_nav">
              <div class="collapse link_container" id="navbarText">
                <a
                  href="##"
                  :class="{ active: currentTab === 'Representative' }"
                  @click="currentTab = 'Representative'"
                  ><span>代表性地方建設</span
                  ><span
                    ><countTo
                      v-if="flag"
                      :startVal="0"
                      :endVal="data5"
                      :duration="3000"
                    ></countTo
                  ></span>
                </a>
                <a
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarText"
                  aria-controls="navbarText"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  href="##"
                  :class="{ active: currentTab === 'FirstSession' }"
                  @click="currentTab = 'FirstSession'"
                >
                  <span>會勘及地方建設 <br />(第一期)</span>
                  <span
                    ><countTo
                      v-if="flag"
                      :startVal="0"
                      :endVal="data4"
                      :duration="3000"
                    ></countTo
                  ></span>
                </a>
                <a
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarText"
                  aria-controls="navbarText"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  href="##"
                  :class="{ active: currentTab === 'SecondSession' }"
                  @click="currentTab = 'SecondSession'"
                  ><span
                    >會勘及地方建設 <br />
                    (第二期)</span
                  ><span
                    ><countTo
                      v-if="flag"
                      :startVal="0"
                      :endVal="data3"
                      :duration="3000"
                    ></countTo
                  ></span>
                </a>
                <a
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarText"
                  aria-controls="navbarText"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  href="##"
                  :class="{ active: currentTab === 'ThirdSession' }"
                  @click="currentTab = 'ThirdSession'"
                  ><span>會勘及地方建設 <br />(第三期)</span
                  ><span
                    ><countTo
                      v-if="flag"
                      :startVal="0"
                      :endVal="data2"
                      :duration="3000"
                    ></countTo
                  ></span>
                </a>
                <a
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarText"
                  aria-controls="navbarText"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  href="##"
                  :class="{ active: currentTab === 'Main' }"
                  @click="currentTab = 'Main'"
                  ><span>總覽</span
                  ><span>
                    <countTo
                      v-if="flag"
                      :startVal="0"
                      :endVal="data1"
                      :duration="3000"
                    ></countTo>
                  </span>
                </a>
                <div
                  class="navbar-toggler arrow_box"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarText"
                  aria-controls="navbarText"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i class="fa-solid fa-caret-down"></i>
                </div>
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
  display: flex;
  width: 100%;
  background-color: $primary;
  @include breakpoint($xl) {
    max-width: 300px;
    height: 100%;
  }
}
.side_nav a,
.side_nav-active button {
  color: white;
}
.side_nav a {
  display: block;
  padding: 17.5px 16px;
  font-size: 17px;
  font-weight: bold;
  @include breakpoint($xl) {
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    padding: 22.5px 30px;
  }
}
.side_nav div + div,
.side_nav a,
.side_nav button {
  border-bottom: 1px solid white;
}
.side_nav button {
  width: 30px;
  height: 54px;
}
.side_nav a span + span {
  padding-left: 8px;
}
.link_container {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  @include breakpoint($xl) {
    display: block;
  }
  a {
    display: flex;
    align-items: center;
    height: 70px;
    width: 100%;
    @include breakpoint($xl) {
      height: auto;
    }
  }
}
.Side_nav_box {
  height: 100%;
  @include breakpoint($xl) {
    display: flex;
  }
}
.side_nav .active {
  order: -1;
  @include breakpoint($xl) {
    color: $primary;
    background: white;
  }
}

.collapse:not(.show) {
  display: flex;
  height: 70px;
  overflow: hidden;
  @include breakpoint($xl) {
    height: 100%;
    display: block;
  }
}
.collapsing {
  height: 70px;
  overflow: hidden;
  @include breakpoint($xl) {
    height: 100%;
  }
}

.arrow_box {
  position: absolute;
  width: 100%;
  height: 70px;
  line-height: 70px;
  text-align: end;
  color: white;
  i {
    padding: 16px;
  }
}
</style>
