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
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/main/main.vue')
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

/**
 * @author V
 * @description 路由守卫
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
