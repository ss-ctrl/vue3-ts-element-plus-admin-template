/**
 * @author V
 * @description 动态加载路由hook
 * @time 2022-08-12 10:39:39
 */

import { RouteRecordRaw } from 'vue-router';
/**
 * @author V
 * @description 获取路由映射
 * @param {*} userMenus 用户路由
 * @return {Array} routes
 * @time 2022-08-12 10:46:42
 */
export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];

  // 1. 先去加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = [];
  const routeFiles = require.context('../router/main', true, /\.ts/);
  routeFiles.keys().forEach((key) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const route = require('../router/main' + key.split('.')[1]);
    allRoutes.push(route.default);
  });
  // console.log(allRoutes);

  // 2.根据菜单获取需要添加的routes
  // userMenus:
  // type === 1 -> children -> type === 1 -> children
  // type === 2 -> url -> route
  /**
   * @author V
   * @description 一个递归调用方法
   * @param {*} menus
   * @return never | array
   * @time 2022-08-12 10:45:51
   */
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url);
        if (route) routes.push(route);
      } else {
        // children递归调用
        _recurseGetRoute(menu.children);
      }
    }
  };

  _recurseGetRoute(userMenus);

  return routes;
}
