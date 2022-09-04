import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    name: "home",
    path: "/home",
    component: () => import("../views/home/Home.vue"),
  },
  {
    name: "favor",
    path: "/favor",
    component: () => import("../views/favor/favor.vue"),
  },
  {
    name: "order",
    path: "/order",
    component: () => import("../views/order/order.vue"),
  },
  {
    name: "message",
    path: "/message",
    component: () => import("../views/message/message.vue"),
  },
  {
    name: "city",
    path: "/city",
    component: () => import("../views/city/city.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
