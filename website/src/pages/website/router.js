import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/pages/website/layouts/Website.vue'),
    
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active"
});

export default router;
