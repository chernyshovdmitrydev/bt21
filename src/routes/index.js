//использование vue-router не было запрещено

import { createRouter, createWebHistory } from "vue-router";
import FirstPage from "../pages/FirstPage.vue";
import SecondPage from "../pages/SecondPage.vue";

const routes = [
  { path: "/", component: FirstPage },
  { path: "/second", component: SecondPage },
  { path: "/*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
