/**
 * @author V
 * @description 登录页面接口
 * @time 2022-08-11 10:24:39
 */
import ssRequest from '../index';
import type { IAccount, IDataType, ILoginResult } from './types';

// 枚举接口
enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // /users/1
  UserMenus = '/role/' // role/1/menu
}

export function accountLoginRequestAPI(account: IAccount) {
  return ssRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    showLoading: true,
    data: account
  });
}

export function requestUserInfoByIdAPI(id: number) {
  return ssRequest.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id
  });
}

export function requestUserMenusByRoleId(id: number) {
  return ssRequest.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu'
  });
}
