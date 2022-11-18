<script setup>
import MainProposal from "./MainProposal.vue";
import JointProposal from "./JointProposal.vue";
import { ref } from "vue";

const currentTab = ref("MainProposal");
</script>
<template>
  <div class="Side_nav_box">
    <nav class="navbar-expand-lg side_nav">
      <div class="side_nav-active">
        <a
          href="##"
          :class="['first', { active: currentTab === MainProposal }]"
          @click="currentTab = MainProposal"
          ><span>法律主提案</span><span>12</span>
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
          :class="{ active: currentTab === JointProposal }"
          @click="currentTab = JointProposal"
          ><span>法律共同提案</span><span>81</span>
        </a>
        <a href="##"><span>書面質詢</span><span>91</span> </a>
        <a href="##"><span>口頭質詢</span><span>91</span> </a>
        <a href="##"><span>其他國會語言</span><span>91</span> </a>
      </div>
    </nav>
    <component :is="currentTab"></component>
  </div>
</template>
<style lang="scss" scoped>
.side_nav {
  position: fixed;
  width: 100%;
  background-color: $primary;
  @include breakpoint($lg) {
    max-width: 300px;
    height: 100%;
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
.side_nav a,
.side_nav-active button {
  border-bottom: 1px solid white;
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
</style>
