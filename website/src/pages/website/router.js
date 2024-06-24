import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/pages/website/layouts/Website.vue'),
    // redirect: '/home',  // Redirect from '/' to '/home'
    children: [
      {
        path: '',  // This is the home page accessible as '/home'
        name: 'Home',
        component: () => import('@/pages/website/pages/HomePage.vue'),
      },
      {
        path: 'blog',
        name: 'Blog',
        component: () => import('@/pages/website/pages/BlogContentPage.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active"
});

export default router;
