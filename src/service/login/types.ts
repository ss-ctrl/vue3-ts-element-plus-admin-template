export interface IAccount {
  name: string;
  password: string;
}
// 请求体 T为泛型
export interface IDataType<T = any> {
  coder: number;
  data: T;
}

export interface ILoginResult {
  id: number;
  name: string;
  token: string;
}
