/**
 * @author V
 * @description vuex入口
 * @time 2022-08-11 10:46:05
 */
import { createStore } from 'vuex';
import type { IRootState } from './types';
import login from './login/login';

const store = createStore<IRootState>({
  state() {
    return {
      name: 'coderwhy',
      age: 1
    };
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
});

export function setupStore() {
  store.dispatch('login/loadLocalLogin');
}

export default store;
