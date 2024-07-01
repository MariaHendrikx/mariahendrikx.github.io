import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/pages/website/layouts/Website.vue"),
    // redirect: '/home',  // Redirect from '/' to '/home'
    children: [
      {
        path: "", // This is the home page accessible as '/home'
        name: "Home",
        component: () => import("@/pages/website/views/HomePage.vue"),
      },
      {
        path: "/blog/:id",
        name: "Blog",
        component: () => import("@/pages/website/views/BlogContentPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

export default router;
