import axios from 'axios';

// axios.defaults.baseURL = ''
// axios的实例
axios.get('http://123.207.32.32:8000/home/multidata').then((result) => {
  console.log(result);
});

// fn1: 请求发送成功会执行的函数
// fn2: 请求发送失败会执行的函数
// axios.interceptors.request(
//   (config: any) => {
//     // 想做的一些操作
//     // 1. 给请求添加token
//     // 2. isLoading动画
//     return config;
//   },
//   (err: any) => {
//     console.log('请求发送错误');
//     return err;
//   }
// );

// fn1: 数据响应成功(服务器正常的返回了数据 20x)
// axios.interceptors.response(
//   (res: any) => {
//     console.log('响应成功的拦截');
//     return res;
//   },
//   (err: any) => {
//     console.log('服务器响应失败');
//     return err;
//   }
// );
