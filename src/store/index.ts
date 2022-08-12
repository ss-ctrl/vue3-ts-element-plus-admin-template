/**
 * @author V
 * @description vuex入口
 * @time 2022-08-11 10:46:05
 */
import { createStore, Store, useStore as useVuexStore } from 'vuex';
import type { IRootState, IStoreType } from './types';
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

export function useStore(): Store<IStoreType> {
  return useVuexStore();
}

export default store;
