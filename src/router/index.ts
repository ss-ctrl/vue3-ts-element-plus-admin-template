/**
 * @author V
 * @description 创建路由
 * @time 2022-08-11 10:35:37
 */
import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
    // children: [] -> 根据userMenus来决定 -> children
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found/not-found.vue')
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

/**
 * @author V
 * @description 导航守卫
 * @time 2022-08-11 10:51:59
 */
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localStorage.getItem('token');
    if (!token) {
      return '/login';
    }
  }
});

export default router;
