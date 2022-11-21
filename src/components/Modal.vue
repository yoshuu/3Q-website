<script setup>
import side_navVue from "./side_nav.vue";
</script>
<template>
  <!-- <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModalFullscreen"
  ></button> -->
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModalFullscreen2"
    tabindex="-1"
    aria-labelledby="exampleModalFullscreenLabel"
    aria-hidden="true"
    style="display: none"
  >
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title" id="exampleModalFullscreen">TEXT</h4>
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
                  :class="['first', { active: currentTab === MainProposal }]"
                  @click="currentTab = MainProposal"
                  ><span>Test</span><span>Test</span>
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
                  ><span>test</span><span>81</span>
                </a>
                <a href="##"><span>test</span><span>test</span> </a>
                <a href="##"><span>test</span><span>test</span> </a>
                <a href="##"><span>test</span><span>test</span> </a>
              </div>
            </nav>
            <component :is="currentTab"></component>
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
</style>
