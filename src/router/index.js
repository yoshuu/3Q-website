import { createRouter, createWebHistory } from "vue-router";
import FrontView from "../views/FrontView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: FrontView,
    },
  ],
});

export default router;
