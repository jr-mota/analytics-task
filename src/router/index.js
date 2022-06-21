import { createRouter, createWebHistory } from "vue-router";

import store from "../store";

const routes = [
  {
    path: "/authorization",
    name: "Authorization",
    component: () => import("../views/Authorization.vue"),
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
  if (to.fullPath !== "/authorization") {
    if (!store.getters["site/getSiteId"]) {
      next("authorization");

      return;
    }
  }

  next();
});

export default router;
