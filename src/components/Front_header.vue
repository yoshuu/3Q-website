<script setup></script>
<template>
  <div class="header_container">
    <div class="slogan_container">
      <div>
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
      <p>
        上任第 <span>100</span> 天 <span>14</span> 時 <span>2</span> 分
        <span>30</span> 秒
      </p>
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
  @include breakpoint($md) {
    background: url(../../src/assets/images/logo.png) no-repeat -104px -155px;
    background-size: 488px 488px;
  }
}
.slogan_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 51px;
  @include breakpoint($md) {
    align-items: flex-start;
    padding-bottom: 40px;
    padding-left: 88px;
  }
  @include breakpoint($lg) {
    padding: 72px 140px 40px;
  }
  > div {
    @include breakpoint($md) {
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
  min-width: 360px;
  width: 50vw;
  @include breakpoint($md) {
    position: absolute;
    z-index: 1;
    max-width: 681.74px;
    top: 280px;
    right: 50px;
  }
  @include breakpoint($xxl) {
    top: 83.74px;
    right: 50.27px;
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
  bottom: 145px;
  width: 100%;
  gap: 8px;

  @include breakpoint($md) {
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
  @include breakpoint($lg) {
    display: block;
    position: absolute;
    top: 204px;
    left: 408px;
  }
}
</style>
