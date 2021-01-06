import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import DataVHome from "../views/DataVHome.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/data",
    name: "Data",
    component: DataVHome
  },
  {
    path: "/bmap",
    name: "bmap",
    component: import("../views/BMap.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
