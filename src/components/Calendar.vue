<script setup>
import { Qalendar } from "qalendar";
import { GET } from "@/api/api.js";
import { ref } from "vue";
const respond = await GET(
  "/%F0%9F%93%86%20Schedule?maxRecords=3&view=Grid%20view"
);
const data = respond.data.records;

let events = ref([]);

events = data.map((s) => ({
  title: s.fields.內容,
  with: "",
  time: { start: s.fields.起始日, end: s.fields.結束日 },
  color: "green",
  isEditable: true,
  id: s.id,
  description: "",
}));

// const events = [
//   {
//     title: "123",
//     with: "Albert Einstein",
//     time: { start: "2022-12-01 04:52", end: "2022-12-01 05:37" },
//     color: "green",
//     isEditable: true,
//     id: "de471c78cb5c",
//     description:
//       "Think of me as Yoda. Only instead of being little and green, I wear suites and I'm awesome.",
//   },
// ... and more
// ];

const config = {
  locale: "zh-CN",
  defaultMode: "month",
  style: {
    colorSchemes: {
      meetings: {
        color: "#fff",
        backgroundColor: "#131313",
      },
      sports: {
        color: "#fff",
        backgroundColor: "#ff4081",
      },
    },
  },
};
</script>

<template>
  <Qalendar
    :selected-date="new Date(2022, 11, 1)"
    :events="events"
    :config="config"
    firstDayOfWeek="sunday"
    :disable-dates="disableDates"
    :default-date="new Date(2022, 11, 1)"
  />
</template>
<style>
/** Please observe,
that your path to the node_modules directory might be different */
@import "../../node_modules/qalendar/dist/style.css";
</style>
