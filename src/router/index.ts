import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import AboutPage from "@/views/AboutPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import ArticlePage from "@/views/ArticlePage.vue";
import InfoPage from "@/views/InfoPage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/info",
    name: "Info",
    component: InfoPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/post/:id",
    name: "Article",
    component: ArticlePage,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const authUser = JSON.parse(
      window.localStorage.getItem("currentUser") || "{}"
    );
    if (authUser && authUser.accessToken) {
      next();
    } else {
      next({ name: "Login" });
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
