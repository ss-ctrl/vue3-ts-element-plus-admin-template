/**
 * @author V
 * @description 按需引入Element
 * @time 2022-08-11 10:47:31
 */
// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css';
import type { App } from 'vue';
import {
  ElAside,
  ElAvatar,
  ElButton,
  ElCheckbox,
  ElContainer,
  ElDropdown,
  ElDropdownItem,
  ElForm,
  ElFormItem,
  ElHeader,
  ElInput,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElRadio,
  ElSubMenu,
  ElTabPane,
  ElTabs
} from 'element-plus';

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElDropdown,
  ElDropdownItem,
  ElAvatar
];

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component);
  }
}
