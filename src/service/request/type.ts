// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface SSRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;

  requestInterceptorCatch?: (error: any) => any;

  responseInterceptor?: (res: any) => any;
  // responseInterceptor?: (res: T) => T; // 暂时不能理解. 等ts熟练再理解 涉及到泛型传递

  responseInterceptorCatch?: (error: any) => any;
}

export interface SSRequestConfig extends AxiosRequestConfig {
  interceptors?: SSRequestInterceptors;
  showLoading?: boolean;
}
