<script setup></script>
<template>
  <div class="comp-full-calendar test-fc">
    <div class="full-calendar-header">
      <div class="header-left"></div>
      <div class="header-center">
        <span class="prev-month">&lt;</span>
        <span class="title">2022年11月</span>
        <span class="next-month">&gt;</span>
      </div>
      <div class="header-right"><div></div></div>
    </div>
    <div class="full-calendar-body">
      <div class="weeks">
        <strong class="week">周日</strong><strong class="week">周一</strong
        ><strong class="week">周二</strong><strong class="week">周三</strong
        ><strong class="week">周四</strong><strong class="week">周五</strong
        ><strong class="week">周六</strong>
      </div>
      <div class="dates">
        <div calss="dates-bg">
          <div class="week-row">
            <div class="day-cell not-cur-month">
              <p class="day-number">30</p>
            </div>
            <div class="day-cell not-cur-month">
              <p class="day-number">31</p>
            </div>
            <div class="day-cell not-cur-month">
              <p class="day-number">1</p>
              <p class="apple">《台灣呷飽冇？》柏惟拍攝</p>
            </div>
            <div class="day-cell not-cur-month">
              <p class="day-number">2</p>
              <p class="apple">柏惟拍攝形象影片</p>
            </div>
            <div class="day-cell not-cur-month">
              <p class="day-number">3</p>
            </div>
            <div class="day-cell not-cur-month">
              <p class="day-number">4</p>
              <p class="apple">民視錄影</p>
            </div>
            <div class="day-cell not-cur-month">
              <p class="day-number">5</p>
              <p class="apple">榮芳帶柏惟三民拜訪前輩</p>
            </div>
          </div>
          <div class="week-row">
            <div class="day-cell not-cur-month">
              <p class="day-number">6</p>
            </div>
            <div class="day-cell not-cur-month">
              <p class="day-number">7</p>
            </div>
            <div class="day-cell not-cur-month">
              <p class="day-number">8</p>
              <p class="apple">保安宮拜拜</p>
            </div>
            <div class="day-cell not-cur-month">
              <p class="day-number">9</p>
            </div>
            <div class="day-cell not-cur-month">
              <p class="day-number">10</p>
              <p class="apple">國會山莊籌備處</p>
            </div>
            <div class="day-cell not-cur-month">
              <p class="day-number">11</p>
            </div>
            <div class="day-cell not-cur-month">
              <p class="day-number">12</p>
            </div>
          </div>
          <div class="week-row">
            <div class="day-cell not-cur-month">
              <p class="day-number">13</p>
            </div>
            <div class="day-cell not-cur-month">
              <p class="day-number">14</p>
              <p class="apple">KNOWING新聞訪談</p>
            </div>
            <div class="day-cell not-cur-month">
              <p class="day-number">15</p>
            </div>
            <div class="day-cell not-cur-month">
              <p class="day-number">16</p>
            </div>
            <div class="day-cell not-cur-month">
              <p class="day-number">17</p>
            </div>
            <div class="day-cell not-cur-month">
              <p class="day-number">18</p>
            </div>
            <div class="day-cell not-cur-month">
              <p class="day-number">19</p>
            </div>
          </div>
          <div class="week-row">
            <div class="day-cell not-cur-month">
              <p class="day-number">20</p>
            </div>
            <div class="day-cell not-cur-month">
              <p class="day-number">21</p>
            </div>
            <div class="day-cell not-cur-month">
              <p class="day-number">22</p>
            </div>
            <div class="day-cell not-cur-month">
              <p class="day-number">23</p>
            </div>
            <div class="day-cell not-cur-month">
              <p class="day-number">24</p>
              <p class="apple">烏日志工招募會</p>
              <p class="apple">拜訪烏日里前里長吳則磐先生</p>
            </div>
            <div class="day-cell not-cur-month">
              <p class="day-number">25</p>
            </div>
            <div class="day-cell not-cur-month">
              <p class="day-number">26</p>
            </div>
          </div>
          <div class="week-row">
            <div class="day-cell not-cur-month">
              <p class="day-number">27</p>
            </div>
            <div class="day-cell not-cur-month">
              <p class="day-number">28</p>
            </div>
            <div class="day-cell not-cur-month">
              <p class="day-number">29</p>
            </div>
            <div class="day-cell not-cur-month">
              <p class="day-number">30</p>
            </div>
            <div class="day-cell not-cur-month">
              <p class="day-number">NaN</p>
            </div>
            <div class="day-cell not-cur-month">
              <p class="day-number">NaN</p>
            </div>
            <div class="day-cell not-cur-month">
              <p class="day-number">NaN</p>
            </div>
          </div>
          <div class="week-row">
            <div class="day-cell not-cur-month">
              <p class="day-number">NaN</p>
            </div>
            <div class="day-cell not-cur-month">
              <p class="day-number">NaN</p>
            </div>
            <div class="day-cell not-cur-month">
              <p class="day-number">NaN</p>
            </div>
            <div class="day-cell not-cur-month">
              <p class="day-number">NaN</p>
            </div>
            <div class="day-cell not-cur-month">
              <p class="day-number">NaN</p>
            </div>
            <div class="day-cell not-cur-month">
              <p class="day-number">NaN</p>
            </div>
            <div class="day-cell not-cur-month">
              <p class="day-number">NaN</p>
            </div>
          </div>
        </div>
        <div class="dates-events">
          <div class="events-week">
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
          </div>
          <div class="events-week">
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
          </div>
          <div class="events-week">
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
          </div>
          <div class="events-week">
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
          </div>
          <div class="events-week">
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
          </div>
          <div class="events-week">
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
            <div track-by="$index" class="events-day not-cur-month">
              <p class="day-number">NaN</p>
              <div class="event-box"><!----></div>
            </div>
          </div>
        </div>
        <div class="more-events" style="left: 0px; top: 0px; display: none">
          <div class="more-header">
            <span class="title">undefined, undefinedNaN</span>
            <span class="close">x</span>
          </div>
          <div class="more-body"><ul class="body-list"></ul></div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.apple {
  background-color: #a63f24;
  color: #fff;
}
.comp-full-calendar {
  padding: 20px;
  background: #fff;
  max-width: 960px;
  margin: 0 auto;
}
.comp-full-calendar ul,
.comp-full-calendar p {
  margin: 0;
  padding: 0;
  font-size: 14px;
}

.full-calendar-body {
  margin-top: 20px;
}
.full-calendar-body .weeks {
  display: flex;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  border-left: 1px solid #e0e0e0;
}
.full-calendar-body .weeks .week {
  flex: 1;
  text-align: center;
  border-right: 1px solid #e0e0e0;
}
.full-calendar-body .dates {
  position: relative;
}
.full-calendar-body .dates .week-row {
  border-left: 1px solid #e0e0e0;
  display: flex;
}
.full-calendar-body .dates .week-row .day-cell {
  flex: 1;
  min-height: 100px;
  padding: 4px;
  border-right: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
}
.full-calendar-body .dates .week-row .day-cell .day-number {
  text-align: right;
}
.full-calendar-body .dates .week-row .day-cell.today {
  background-color: #fcf8e3;
}
.full-calendar-body .dates .week-row .day-cell.not-cur-month .day-number {
  color: rgba(0, 0, 0, 0.24);
}
.full-calendar-body .dates .dates-events {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
}
.full-calendar-body .dates .dates-events .events-week {
  display: flex;
}
.full-calendar-body .dates .dates-events .events-week .events-day {
  cursor: pointer;
  flex: 1;
  min-height: 109px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.full-calendar-body .dates .dates-events .events-week .events-day .day-number {
  text-align: right;
  padding: 4px 5px 4px 4px;
  opacity: 0;
}
.full-calendar-body
  .dates
  .dates-events
  .events-week
  .events-day.not-cur-month
  .day-number {
  color: rgba(0, 0, 0, 0.24);
}
.full-calendar-body
  .dates
  .dates-events
  .events-week
  .events-day
  .event-box
  .event-item {
  cursor: pointer;
  font-size: 12px;
  background-color: #c7e6fd;
  margin-bottom: 2px;
  color: rgba(0, 0, 0, 0.87);
  padding: 0 0 0 4px;
  height: 18px;
  line-height: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.full-calendar-body
  .dates
  .dates-events
  .events-week
  .events-day
  .event-box
  .event-item.is-start {
  margin-left: 4px;
}
.full-calendar-body
  .dates
  .dates-events
  .events-week
  .events-day
  .event-box
  .event-item.is-end {
  margin-right: 4px;
}
.full-calendar-body
  .dates
  .dates-events
  .events-week
  .events-day
  .event-box
  .event-item.is-opacity {
  opacity: 0;
}
.full-calendar-body
  .dates
  .dates-events
  .events-week
  .events-day
  .event-box
  .more-link {
  cursor: pointer;
  padding-left: 8px;
  padding-right: 2px;
  color: rgba(0, 0, 0, 0.38);
  font-size: 14px;
}
.full-calendar-body .dates .more-events {
  position: absolute;
  width: 150px;
  z-index: 2;
  border: 1px solid #eee;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}
.full-calendar-body .dates .more-events .more-header {
  background-color: #eee;
  padding: 5px;
  display: flex;
  align-items: center;
  font-size: 14px;
}
.full-calendar-body .dates .more-events .more-header .title {
  flex: 1;
}
.full-calendar-body .dates .more-events .more-header .close {
  margin-right: 2px;
  cursor: pointer;
  font-size: 16px;
}
.full-calendar-body .dates .more-events .more-body {
  height: 140px;
  overflow: hidden;
}
.full-calendar-body .dates .more-events .more-body .body-list {
  height: 120px;
  padding: 5px;
  overflow: auto;
  background-color: #fff;
}
.full-calendar-body .dates .more-events .more-body .body-list .body-item {
  cursor: pointer;
  font-size: 12px;
  background-color: #c7e6fd;
  margin-bottom: 2px;
  color: rgba(0, 0, 0, 0.87);
  padding: 0 0 0 4px;
  height: 18px;
  line-height: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.full-calendar-header {
  display: flex;
  align-items: center;
}
.full-calendar-header .header-left,
.full-calendar-header .header-right {
  flex: 1;
}
.full-calendar-header .header-center {
  flex: 3;
  text-align: center;
}
.full-calendar-header .header-center .title {
  margin: 0 10px;
}
.full-calendar-header .header-center .prev-month,
.full-calendar-header .header-center .next-month {
  cursor: pointer;
}
</style>
