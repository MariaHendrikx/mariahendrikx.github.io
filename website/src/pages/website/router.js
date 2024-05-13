import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/pages/website/layouts/Website.vue'),
    redirect: '/home',  // Redirect from '/' to '/home'
    children: [
      {
        path: 'home',  // This is the home page accessible as '/home'
        name: 'Home',
        component: () => import('@/pages/website/views/HomeView.vue'),
      },
      {
        path: 'portfolio',
        name: 'Portfolio',
        component: () => import('@/pages/website/views/PortfolioView.vue'),
      },
      {
        path: 'blog',
        name: 'Blog',
        component: () => import('@/pages/website/views/BlogView.vue'),
      },
      {
        path: 'blog-layout',  // Changed from '/' to 'blog-layout' to avoid conflicts
        component: () => import('@/pages/website/layouts/BlogLayout.vue'),
        children: [
          {
            path: 'blog-practise',  // Note these paths are relative to 'blog-layout'
            name: 'practise',
            component: () => import('@/pages/website/components/BlogPostsComponents/Blog2019Practise.vue'),
          },
          {
            path: 'blog-rythmexplained',
            name: 'Blog2019RythmExplained',
            component: () => import('@/pages/website/components/BlogPostsComponents/Blog2019RythmExplained.vue'),
          },
        ],
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active"
});

export default router;
