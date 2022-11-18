<script setup>
import { reactive } from "vue";

//取得時間
let nowTime = reactive({
  data: "",
});
let myDate = new Date();
function setTime(myDate) {
  const year = myDate.getFullYear();
  const month =
    myDate.getMonth() + 1 < 10
      ? "0" + (myDate.getMonth() + 1)
      : myDate.getMonth() + 1;
  const date =
    myDate.getDate() < 10 ? "0" + myDate.getDate() : myDate.getDate();
  const h = myDate.getHours();
  const m =
    myDate.getMinutes() < 10 ? "0" + myDate.getMinutes() : myDate.getMinutes();
  const s =
    myDate.getSeconds() < 10 ? "0" + myDate.getSeconds() : myDate.getSeconds();

  nowTime.data =
    (year - 2020) * 365 +
    (month - 2) * 30 +
    (date - 1) +
    4 +
    "天" +
    h +
    "時" +
    m +
    "分" +
    s +
    "秒";
}
function nowTimes() {
  setTime(myDate);
  setInterval(() => {
    myDate = new Date();
    setTime(myDate);
  }, 1000);
}
nowTimes();
</script>
<template>
  <div class="header_container">
    <div class="slogan_container">
      <div class="aaa">
        <p>會說話</p>
        <p>會做事</p>
      </div>
      <P>台灣基進立法委員</P>
      <h1>陳柏惟</h1>
    </div>
    <div class="people_info">
      <img src="../../src/assets/images/people-01.png" alt="形象照" />
    </div>
    <div class="duration_container">
      <p>上任第{{ nowTime.data }}</p>
      <p>立院出席率<span>100%</span></p>
    </div>
    <div class="data_prove">
      <img src="../assets/images/title-decoration.png" alt="" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.header_container {
  position: relative;
  min-width: 375px;
  background: url(../../src/assets/images/logo.png) no-repeat -130px -97px;
  @include breakpoint($xl) {
    background: url(../../src/assets/images/logo.png) no-repeat -104px -155px;
    background-size: 488px 488px;
  }
}
.slogan_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 51px;
  @include breakpoint($xl) {
    align-items: flex-start;
    padding: 72px 140px 40px;
    padding-bottom: 40px;
  }

  > div {
    display: flex;
    flex-direction: column;
    @include breakpoint($xl) {
      flex-direction: row;
      gap: 30px;
    }
  }
}
.slogan_container,
h1 {
  color: $primary;
  font-weight: bold;
  font-size: 65px;
}
.slogan_container > p:nth-child(2) {
  font-size: 24px;
}

.people_info {
  margin: -22px auto 0;
  max-width: 360px;
  min-height: 550px;
  @include breakpoint($xl) {
    position: absolute;
    z-index: 1;
    max-width: 766.08px;
    top: 150px;
    right: 7.73px;
  }
  img {
    width: 100%;
    transform: rotate(4.81deg);
    object-fit: contain;
  }
}

.duration_container {
  position: absolute;
  display: flex;
  flex-direction: column;
  text-align: center;
  bottom: 145px;
  width: 100%;
  gap: 8px;

  @include breakpoint($xl) {
    flex-direction: row;
    width: unset;
    gap: 16px;
    top: 25px;
    right: 25px;
    bottom: unset;
  }
  p {
    padding: 7px 21px;
    color: white;
    font-weight: 900;
    font-size: 15px;
    background: $primary;
  }
}

.data_prove {
  display: none;
  @include breakpoint($xl) {
    display: block;
    position: absolute;
    top: 204px;
    left: 408px;
  }
}

.aaa {
  @include breakpoint($lg) {
    display: flex;
    font-size: 100px;
  }
}
</style>
