import store from "../store";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/auth",
    name: "Auth",
    component: () => import("../views/Auth.vue"),
  },
  {
    path: "/analytics",
    name: "Analytics",
    component: () => import("../views/Analytics.vue"),
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/analytics",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.fullPath !== "/auth") {
    if (!store.getters["site/getSiteId"]) {
      next("auth");

      return;
    }
  }

  next();
});

export default router;
