/**
 * @author V
 * @description 入口文件
 * @time 2022-08-11 10:46:20
 */
import type { App } from 'vue';
import { createApp } from 'vue';
import 'normalize.css';
import './assets/css/index.less';
import { globalRegister } from './global';
// import './service/axios_demo';

import rootApp from './App.vue';

import router from './router';
import store from './store';
import { setupStore } from './store';
const app: App = createApp(rootApp);

// 注册element-plus/其他
app.use(globalRegister);
app.use(router);
app.use(store);
setupStore();
app.mount('#app');

// console.log(process.env.VUE_APP_BASE_NAME);
// console.log(process.env.VUE_APP_BASE_URL);
