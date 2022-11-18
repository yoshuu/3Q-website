<script setup>
import MainProposal from "./ProposalResult/MainProposal.vue";
import JointProposal from "./ProposalResult/JointProposal.vue";
import OralQuestioning from "./ProposalResult/OralQuestioning.vue";
import OtherSpeeches from "./ProposalResult/OtherSpeeches.vue";
import OralInterpellation from "./ProposalResult/OralInterpellation.vue";
import { ref } from "vue";

// 各資料數量
import { GET } from "@/api/api.js";
const respond = await GET(
  "https://api.airtable.com/v0/app4NIZthoTlA3i05/%E5%90%84%E8%B3%87%E6%96%99%E6%95%B8%E9%87%8F?maxRecords=30&view=Grid%20view"
);

const data = respond.data.records;

const currentTab = ref("MainProposal");

const tabs = {
  MainProposal,
  JointProposal,
  OralQuestioning,
  OtherSpeeches,
  OralInterpellation,
};
</script>

<template>
  <div class="Side_nav_box">
    <nav class="navbar-expand-lg side_nav">
      <div class="side_nav-active">
        <a
          href="##"
          :class="{ active: currentTab === 'MainProposal' }"
          @click="currentTab = 'MainProposal'"
          ><span>法律主提案</span><span>{{ data[11].fields.資料數量 }}</span>
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
          :class="{ active: currentTab === 'JointProposal' }"
          @click="currentTab = 'JointProposal'"
          ><span>法律共同提案</span><span>{{ data[10].fields.資料數量 }}</span>
        </a>
        <a
          href="##"
          :class="{ active: currentTab === 'OralInterpellation' }"
          @click="currentTab = 'OralInterpellation'"
          ><span>書面質詢</span><span>{{ data[9].fields.資料數量 }}</span>
        </a>
        <a
          href="##"
          :class="{ active: currentTab === 'OralQuestioning' }"
          @click="currentTab = 'OralQuestioning'"
          ><span>口頭質詢</span><span>{{ data[8].fields.資料數量 }}</span>
        </a>
        <a
          href="##"
          :class="[{ active: currentTab === 'OtherSpeeches' }]"
          @click="currentTab = 'OtherSpeeches'"
          ><span>其他國會語言</span><span>{{ data[7].fields.資料數量 }}</span>
        </a>
      </div>
    </nav>
    <Suspense>
      <component :is="tabs[currentTab]"></component>
    </Suspense>
  </div>
</template>
<style lang="scss" scoped>
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
