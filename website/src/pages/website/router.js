import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/pages/website/layouts/Website.vue'),
  },
  {
    path: '/blog-layout',  // Changed from '/' to 'blog-layout' to avoid conflicts
    component: () => import('@/pages/website/layouts/BlogLayout.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active"
});

export default router;
