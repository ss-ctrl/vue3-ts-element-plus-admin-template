/**
 * @author V
 * @description 封装axios工具类
 * @time 2022-08-11 10:48:13
 */
import type { AxiosInstance } from 'axios';
import type { SSRequestInterceptors, SSRequestConfig } from './type';
import type { LoadingInstance } from 'element-plus/es/components/loading/src/loading';
import axios from 'axios';
import { ElLoading } from 'element-plus';

const DEFAULT_LOADING = false;

class SSRequest {
  instance: AxiosInstance;
  interceptors?: SSRequestInterceptors;
  showLoading: boolean;
  loading?: LoadingInstance;

  constructor(config: SSRequestConfig) {
    this.instance = axios.create(config);
    this.showLoading = config.showLoading ?? DEFAULT_LOADING;
    this.interceptors = config.interceptors;

    // 从config中取出的拦截器是对应实例的拦截器

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    // 添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('所有的实例都有的拦截器：请求成功拦截');
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据....',
            background: 'rgba(0, 0, 0, 0.5)'
          });
        }
        return config;
      },
      (err) => {
        // console.log('所有的实例都有的拦截器：请求失败拦截');
        return err;
      }
    );

    this.instance.interceptors.response.use(
      (res) => {
        // console.log('所有的实例都有的拦截器：响应成功拦截');

        // 将loading移除
        this.loading?.close();

        const data = res.data;
        if (data.returnCode === '-1001') {
          console.log('请求失败~, 错误信息');
        } else {
          return data;
        }
      },
      (err) => {
        // console.log('所有的实例都有的拦截器：响应失败拦截');

        // 将loading移除
        this.loading?.close();

        // 例子：判断不同的HttpErrorCode显示不同的错误信息
        if (err.response.status === 404) {
          console.log('404的错误~');
        }
        return err;
      }
    );
  }

  request<T>(config: SSRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1.单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }

      // 2.判断是否需要显示loading
      if (config.showLoading === false) {
        this.showLoading = false;
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          // console.log(res);

          // 将showLoading设置true， 这样不会影响下一个请求
          this.showLoading = DEFAULT_LOADING;

          // 将结果resolve返回出去
          resolve(res);
        })
        .catch((err) => {
          // 将showLoading设置true， 这样不会影响下一个请求
          this.showLoading = DEFAULT_LOADING;
          reject(err);
          return err;
        });
    });
  }

  get<T>(config: SSRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' });
  }

  post<T>(config: SSRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' });
  }

  delete<T>(config: SSRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' });
  }

  put<T>(config: SSRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PUT' });
  }

  patch<T>(config: SSRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' });
  }
}

export default SSRequest;
