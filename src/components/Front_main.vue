<script setup>
import { GET } from "@/api/api.js";
import Title from "./Title.vue";
import Modal from "./Modal.vue";
import PetitionCase from "./PetitionCase.vue";
import Survey from "./Survey.vue";

const respond = await GET(
  "/%E5%90%84%E8%B3%87%E6%96%99%E6%95%B8%E9%87%8F?maxRecords=100&view=Grid%20view"
);
const data = respond.data.records;
const data1 = data[0].fields.資料數量;
const data2 = data[13].fields.資料數量;
</script>
<template>
  <Title />
  <Suspense>
    <Survey />
  </Suspense>

  <Modal />
  <PetitionCase />
  <div class="card_container">
    <div
      class="test1"
      data-bs-toggle="modal"
      data-bs-target="#exampleModalFullscreen"
    >
      <div>
        <div>
          <p>12</p>
          <h2>法律主提案</h2>
        </div>
        <div>
          <p>12</p>
          <h2>法律共同提案</h2>
        </div>
        <div>
          <p>98</p>
          <h2>書面質詢</h2>
        </div>
        <div>
          <p>18</p>
          <h2>口頭質詢</h2>
        </div>
        <div>
          <p>98</p>
          <h2>其他國會發言</h2>
        </div>
      </div>
      <div class="details">
        <p>詳細內容</p>
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class=""
        >
          <circle
            cx="18"
            cy="18"
            r="17"
            transform="rotate(-90 18 18)"
            stroke="#FFF"
            stroke-width="2"
          ></circle>
          <path
            d="M9.5 18h16.25M21 23l5-5-5-5"
            stroke="#FFF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <!-- <i class="fa-solid fa-arrow-right"></i> -->
      </div>
    </div>
    <div
      class="test2"
      data-bs-toggle="modal"
      data-bs-target="#exampleModalFullscreen3"
    >
      <div>
        <p>{{ data1 }}</p>
        <h2>陳情案件</h2>
      </div>
      <div class="details">
        <p>詳細內容</p>
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class=""
        >
          <circle
            cx="18"
            cy="18"
            r="17"
            transform="rotate(-90 18 18)"
            stroke="#FFF"
            stroke-width="2"
          ></circle>
          <path
            d="M9.5 18h16.25M21 23l5-5-5-5"
            stroke="#FFF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <!-- <i class="fa-solid fa-arrow-right"></i> -->
      </div>
    </div>
    <div class="test3" data-bs-toggle="modal" data-bs-target="#Survey">
      <div>
        <p>{{ data2 }}</p>
        <h2>會勘及地方建設</h2>
      </div>
      <div class="details">
        <p>詳細內容</p>
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class=""
        >
          <circle
            cx="18"
            cy="18"
            r="17"
            transform="rotate(-90 18 18)"
            stroke="#FFF"
            stroke-width="2"
          ></circle>
          <path
            d="M9.5 18h16.25M21 23l5-5-5-5"
            stroke="#FFF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <!-- <i class="fa-solid fa-arrow-right"></i> -->
      </div>
    </div>
    <div
      class="test4"
      data-bs-toggle="modal"
      data-bs-target="#exampleModalFullscreen2"
    >
      <div>
        <p>13</p>
        <h2>主辦記者會</h2>
      </div>
      <div class="details">
        <p>詳細內容</p>
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class=""
        >
          <circle
            cx="18"
            cy="18"
            r="17"
            transform="rotate(-90 18 18)"
            stroke="#FFF"
            stroke-width="2"
          ></circle>
          <path
            d="M9.5 18h16.25M21 23l5-5-5-5"
            stroke="#FFF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <!-- <i class="fa-solid fa-arrow-right"></i> -->
      </div>
    </div>
    <div
      class="test5"
      data-bs-toggle="modal"
      data-bs-target="#exampleModalFullscreen2"
    >
      <div>
        <p>79</p>
        <h2>社會及公益活動</h2>
      </div>
      <div class="details">
        <p>詳細內容</p>
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class=""
        >
          <circle
            cx="18"
            cy="18"
            r="17"
            transform="rotate(-90 18 18)"
            stroke="#FFF"
            stroke-width="2"
          ></circle>
          <path
            d="M9.5 18h16.25M21 23l5-5-5-5"
            stroke="#FFF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <!-- <i class="fa-solid fa-arrow-right"></i> -->
      </div>
    </div>
  </div>
  <div class="main_slogan_container">
    <h2><span>不只會做事</span><span>更重視鄉親</span></h2>
    <div>
      <div>
        <p>4964</p>
        <h3>地方行程</h3>
      </div>
      <div>
        <p>1846</p>
        <h3>鄉親拜訪</h3>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.card_container {
  margin-top: -129px;
  color: $primary;
  font-weight: 900;
  @include breakpoint($md) {
  }
  @include breakpoint($md) {
    margin-top: unset;
    padding: 0 88px;
    display: grid;
    grid-template-rows: 40vw 2vw 18vw 2vw 2vw 20vw;
    grid-template-columns: 32.1% 1.72% 18.5% 13.5% 1.72% 32.1%;
  }
  @include breakpoint($lg) {
    padding: 0 140px;
  }
  @include breakpoint($xxl) {
    display: grid;
    grid-template-rows: 436px 20px 210px 20px 20px 230px;
    // grid-template-columns: 373px 20px 215.6px 157.4px 20px 373px;
  }

  > div {
    position: relative;
    margin: 0 16px 16px;
    padding: 16px 16px;
    min-height: 205px;

    &:hover {
      svg {
        transform: rotate(90deg);
        transition-duration: 2s;
        transition-property: transform;
        circle,
        path {
          stroke: white;
        }
      }
      color: white;
      background: $primary;
    }
    @include breakpoint($md) {
      margin: 0;
      min-height: unset;
    }
    @include breakpoint($xl) {
      padding: 24px 30px;
    }
  }
  h2 {
    font-size: 17px;
    @include breakpoint($xl) {
      font-size: 24px;
    }
  }
  p {
    font-size: 50px;
    line-height: 50px;
    @include breakpoint($xl) {
      font-size: 80px;
      line-height: 80px;
    }
  }
  .details {
    position: absolute;
    display: flex;
    align-items: center;
    bottom: 16px;
    right: 16px;
    @include breakpoint($xxl) {
      bottom: 30px;
      right: 30px;
    }
    p {
      font-size: 15px;
      @include breakpoint($xxl) {
        font-size: 24px;
      }
    }

    svg {
      margin-left: 16px;
      circle,
      path {
        stroke: $primary;
      }
      @include breakpoint($lg) {
        width: 54px;
        height: 54px;
      }
    }
  }
}
.test1 {
  grid-area: 1/1/1/4;
  background: url(../assets/images/proposal-bg.png) no-repeat 190px bottom
    #f6f6f6;
  background-size: 298px 152px;
  @include breakpoint($lg) {
    background-size: 510px 260px;
    background-position: 290px 176px;
  }

  > div:nth-child(1) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 256px;
    @include breakpoint($xl) {
      width: 355px;
    }
    > div {
      flex-basis: 104px;
      @include breakpoint($xl) {
        flex-basis: 150px;
      }
    }
    > div:nth-child(n + 3) {
      margin-top: 17px;
      @include breakpoint($lg) {
        margin-top: 24px;
      }
    }
  }
}
.test2 {
  grid-area: 3/1/5/2;
  background: url(../assets/images/petition-bg.png) no-repeat 169px 75px #f6f6f6;
  background-size: 154px 169px;
  @include breakpoint($lg) {
    background-size: 175px 208.56px;
    background-position: 175px 92.8px;
  }
}
.test3 {
  grid-area: 3/3/7/5;
  background: url(../assets/images/survey-bg-lg.png) no-repeat 171px 16px
    #f6f6f6;
  background-size: 151px 279px;
  @include breakpoint($lg) {
    background-size: 254px 468.38px;
    background-position: 124px 56px;
  }

  > div {
    @include breakpoint($md) {
      text-align: center;
    }
  }
  .details {
    @include breakpoint($md) {
      justify-content: center;
      position: unset;
    }
  }
}
.test4 {
  grid-area: 6/1/6/2;
  background: url(../assets/images/press-conference-bg.png) no-repeat -26px 18px
    #f6f6f6;
  background-size: 507px 308px;
  @include breakpoint($lg) {
    background-size: 672px 395.95px;
    background-position: -148px 32.03px;
  }
}
.test5 {
  grid-area: 4/6/7/7;
  background: url(../assets/images/welfare-bg.png) no-repeat 87px 25px #f6f6f6;
  background-size: 271.55px 228px;
  @include breakpoint($lg) {
    background-size: 318px 267px;
    background-position: 113px 25px;
  }
  @include breakpoint($md) {
    z-index: 2;
  }
}
.main_slogan_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  align-items: center;
  padding: 30px 0;
  text-align: center;
  font-weight: 900;
  color: white;
  margin-top: 1.5rem;
  background-color: $primary;
  @include breakpoint($md) {
    padding: 35px 0 49px;
    gap: 27px;
  }
  h2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 40px;
    @include breakpoint($md) {
      flex-direction: row;
      margin-bottom: 27px;
      font-size: 60px;
      gap: 20px;
    }
  }
  h3 {
    font-size: 17px;
    @include breakpoint($md) {
      font-size: 24px;
    }
  }
  p {
    font-size: 50px;
    @include breakpoint($md) {
      font-size: 100px;
    }
  }
  > div {
    @include breakpoint($md) {
      display: flex;
      justify-content: center;
      gap: 99px;
    }
  }
}
</style>
