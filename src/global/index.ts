/**
 * @author V
 * @description 全局方法
 * @time 2022-08-11 10:55:08
 */
import type { App } from 'vue';
import registerElement from './register-element';
export function globalRegister(app: App): void {
  registerElement(app);
  // registerOther();
}
