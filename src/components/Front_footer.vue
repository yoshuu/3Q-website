<script setup>
import Calendar from "./Calendar.vue";
import FormVue from "./Form.vue";
</script>
<template>
  <div class="footer_container">
    <div class="calendar-box">
      <Suspense>
        <Calendar />
      </Suspense>
    </div>
    <div class="form-box">
      <FormVue />
    </div>
    <div class="article_container">
      <div class="footer_slogan">
        <h3 class="footer_slogan_title">盡忠職守，問心無愧</h3>
        <div class="footer_slogan_content">
          <p>
            無論您喜歡或討厭我，都邀請您出來投票，<br />
            我們支持的是台灣、是民主，<br />
            讓我們用選票說出自己的聲音，讓台灣再贏一次！
          </p>
          <br />
          <p>我是台灣基進的立法委員-陳柏惟。大風大浪，一起前行，3Q！</p>
        </div>
      </div>
      <div class="office_container">
        <div>
          <h4>國會研究室：</h4>
          <a href="tel:+(02)2358-8156">(02)2358-8156</a>
          <p>100-224 臺北市中正區濟南路一段3-1號0708室</p>
        </div>
        <div>
          <h4>烏日服務處：</h4>
          <a href="tel:+(04)2337-7383">(04)2337-7383</a>
          <p>414-603 臺中市烏日區中山路一段525號</p>
        </div>
        <div>
          <h4>沙鹿服務處：</h4>
          <a href="tel:+(04)2662-0913">(04)2662-0913</a>
          <p>433-107 臺中市沙鹿區中山路537號</p>
        </div>
        <div>
          <h4>霧峰服務處：</h4>
          <a href="tel:+(04)2330-5663">(04)2330-5663</a>
          <p>413-007 臺中市霧峰區文化巷57號</p>
        </div>
        <div>
          <h4>大肚服務處：</h4>
          <a href="tel:+(04)2699-8903">(04)2699-8903</a>
          <p>432-011 臺中市大肚區自由路148號</p>
        </div>
        <div>
          <h4>龍井中央路服務處：</h4>
          <a href="tel:+2639-1163">(04)2639-1163</a>
          <p>434-008 臺中市龍井區中央路三段169號</p>
        </div>
      </div>
    </div>
    <div class="community_list">
      <div class="community_add">
        <p>加入</p>
        <a
          target="_blank"
          class="community_add_line"
          href="https://lin.ee/B4TeoDx"
        >
          <svg
            width="36"
            height="36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 7.923c-6.064 0-11 4.045-11 9.016 0 4.453 3.914 8.183 9.199 8.893.358.076.846.239.97.546.11.279.072.71.034 1l-.15.943c-.041.28-.22 1.098.962.597 1.183-.498 6.34-3.774 8.65-6.455C28.244 20.715 29 18.924 29 16.939c0-4.97-4.936-9.016-11-9.016zm-4.306 11.972h-2.187a.584.584 0 01-.577-.582v-4.415c0-.32.261-.583.577-.583.32 0 .578.263.578.583v3.832h1.61a.58.58 0 01.576.583.582.582 0 01-.577.582zm2.26-.582a.582.582 0 01-.578.582.581.581 0 01-.574-.582v-4.415c0-.32.258-.583.577-.583.317 0 .576.263.576.583v4.415zm5.264 0a.582.582 0 01-.579.58.565.565 0 01-.467-.231l-2.24-3.07v2.72a.58.58 0 01-.578.583.58.58 0 01-.574-.583v-4.414a.58.58 0 01.572-.582c.179 0 .344.097.454.236l2.256 3.082v-2.736c0-.32.259-.583.578-.583.316 0 .578.263.578.583v4.415zm3.533-2.791c.32 0 .578.264.578.584 0 .32-.258.583-.578.583h-1.609v1.041h1.61a.58.58 0 01.577.583.581.581 0 01-.578.582h-2.187a.581.581 0 01-.575-.582v-4.415c0-.32.259-.583.578-.583h2.187c.317 0 .575.263.575.583a.58.58 0 01-.578.583h-1.609v1.04h1.61z"
              fill="#A63F24"
            ></path>
          </svg>
        </a>
        <a
          target="_blank"
          class="community_add_facebook"
          href="https://www.facebook.com/3Q.PehUi"
        >
          <svg
            width="36"
            height="36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              data-v-88897794=""
              d="M24.574 9H11.426A2.426 2.426 0 009 11.425v13.15A2.425 2.425 0 0011.426 27h6.484l.012-6.432H16.25a.394.394 0 01-.394-.393l-.008-2.073c0-.219.176-.396.394-.396h1.668v-2.004c0-2.325 1.42-3.59 3.494-3.59h1.702c.218 0 .395.176.395.394v1.748a.394.394 0 01-.394.394h-1.045c-1.128 0-1.346.537-1.346 1.323v1.735h2.478c.236 0 .42.206.392.44l-.246 2.074a.394.394 0 01-.392.348h-2.221L20.716 27h3.858A2.425 2.425 0 0027 24.575v-13.15A2.426 2.426 0 0024.574 9z"
              fill="#A63F24"
            ></path>
          </svg>
        </a>
      </div>
      <div class="community_share">
        <p>分享至</p>
        <a
          target="_blank"
          href="https://social-plugins.line.me/lineit/share?url=https://yoshuu.github.io/3Q-website/"
        >
          <svg
            width="36"
            height="36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 7.923c-6.064 0-11 4.045-11 9.016 0 4.453 3.914 8.183 9.199 8.893.358.076.846.239.97.546.11.279.072.71.034 1l-.15.943c-.041.28-.22 1.098.962.597 1.183-.498 6.34-3.774 8.65-6.455C28.244 20.715 29 18.924 29 16.939c0-4.97-4.936-9.016-11-9.016zm-4.306 11.972h-2.187a.584.584 0 01-.577-.582v-4.415c0-.32.261-.583.577-.583.32 0 .578.263.578.583v3.832h1.61a.58.58 0 01.576.583.582.582 0 01-.577.582zm2.26-.582a.582.582 0 01-.578.582.581.581 0 01-.574-.582v-4.415c0-.32.258-.583.577-.583.317 0 .576.263.576.583v4.415zm5.264 0a.582.582 0 01-.579.58.565.565 0 01-.467-.231l-2.24-3.07v2.72a.58.58 0 01-.578.583.58.58 0 01-.574-.583v-4.414a.58.58 0 01.572-.582c.179 0 .344.097.454.236l2.256 3.082v-2.736c0-.32.259-.583.578-.583.316 0 .578.263.578.583v4.415zm3.533-2.791c.32 0 .578.264.578.584 0 .32-.258.583-.578.583h-1.609v1.041h1.61a.58.58 0 01.577.583.581.581 0 01-.578.582h-2.187a.581.581 0 01-.575-.582v-4.415c0-.32.259-.583.578-.583h2.187c.317 0 .575.263.575.583a.58.58 0 01-.578.583h-1.609v1.04h1.61z"
              fill="#A63F24"
            ></path>
          </svg>
        </a>
        <a
          target="_blank"
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fyoshuu.github.io%2F3Q-website%2F&amp;src=sdkpreparse"
        >
          <svg
            class=""
            width="36"
            height="36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.574 9H11.426A2.426 2.426 0 009 11.425v13.15A2.425 2.425 0 0011.426 27h6.484l.012-6.432H16.25a.394.394 0 01-.394-.393l-.008-2.073c0-.219.176-.396.394-.396h1.668v-2.004c0-2.325 1.42-3.59 3.494-3.59h1.702c.218 0 .395.176.395.394v1.748a.394.394 0 01-.394.394h-1.045c-1.128 0-1.346.537-1.346 1.323v1.735h2.478c.236 0 .42.206.392.44l-.246 2.074a.394.394 0 01-.392.348h-2.221L20.716 27h3.858A2.425 2.425 0 0027 24.575v-13.15A2.426 2.426 0 0024.574 9z"
              fill="#A63F24"
            ></path>
          </svg>
        </a>
      </div>
    </div>
    <div class="footer_people">
      <img src="../assets/images/people-02.png" alt="形象照二" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.calendar-box {
  text-align: center;
  width: 100%;
}
.footer_container {
  position: relative;
  padding: 30px 16px 45px;
  font-size: 17px;
  @include breakpoint($xl) {
    padding: 48px 50px 50px 556px;
  }
}

.article_container {
  display: flex;
  flex-direction: column;
  .footer_slogan {
    &_title {
      font-size: 24px;
      font-weight: 700;
    }
    &_content {
      margin: 24px 0;
    }
  }
  .office_container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    h4 {
      font-size: 16px;
      font-weight: 700;
    }
    a {
      color: $primary;
    }

    > div {
      flex-basis: calc(50% - 10px);
      @include breakpoint($xl) {
      }
    }
  }
}
.community_list {
  display: flex;
  margin-top: 20px;
  gap: 36px;
  color: $primary;
}
.community_add,
.community_share {
  align-items: center;
  display: flex;
  gap: 4px;
}

.footer_people {
  display: none;
  width: 442px;
  @include breakpoint($xl) {
    display: block;
    position: absolute;
    left: -20px;
    bottom: 0;
  }
  @include breakpoint($xxl) {
    left: 32px;
  }
  img {
    width: 100%;
  }
}

.form-box {
  text-align: center;
  @include breakpoint($xl) {
    position: absolute;
    top: 200px;
    left: 150px;
  }
}
</style>
