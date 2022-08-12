/**
 * @author V
 * @description vuex login模块
 * @time 2022-08-11 10:24:59
 */
import { Module } from 'vuex';
import type { ILoginState } from './types';
import type { IRootState } from '../types';
import {
  accountLoginRequestAPI,
  requestUserInfoByIdAPI,
  requestUserMenusByRoleId
} from '@/service/login/loginService';
import { IAccount } from '@/service/login/types';
import localCache from '@/utils/cache';
import { mapMenusToRoutes } from '@/utils/map-menus';
import router from '@/router';

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    };
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token;
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo;
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus;
      // 注册路由 userMenus => routes
      const routes = mapMenusToRoutes(userMenus);
      // 将routes => router.main.children
      routes.forEach((route) => {
        router.addRoute('main', route);
      });
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1.实现登录逻辑
      const loginResult = await accountLoginRequestAPI(payload);
      const { id, token } = loginResult.data;
      commit('changeToken', token);
      localCache.setCache('token', token);

      // 2.请求用户信息
      const userInfoResult = await requestUserInfoByIdAPI(id);
      const userInfo = userInfoResult.data;
      commit('changeUserInfo', userInfo);
      localCache.setCache('userInfo', userInfo);

      // 3.获取路由权限
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id);
      commit('changeUserMenus', userMenusResult.data);
      localCache.setCache('userMenus', userMenusResult.data);

      // 4.跳到首页
      router.push('/main');
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token');
      if (token) {
        commit('changeToken', token);
      }
      const userInfo = localCache.getCache('userInfo');
      if (userInfo) {
        commit('changeUserInfo', userInfo);
      }
      const userMenus = localCache.getCache('userMenus');
      if (userInfo) {
        commit('changeUserMenus', userMenus);
      }
    }
  }
};

export default loginModule;
