import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import pinia from "./stores";
import ElemnetPlus from "element-plus";
// 引入ElementPlus所有图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import "element-plus/dist/index.css";
// 引入ElementPlus的暗黑模式css
import "element-plus/theme-chalk/dark/css-vars.css";

// SVG插件配置
import "virtual:svg-icons-register";

import "animate.css";
import "./styles/index.scss";

import "uno.css";

import QComponents from "./components";

const app = createApp(App);

// 注册ElementPlus所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
// 注册路由
app.use(router);
// 注册pinia
app.use(pinia);
// 注册ui组件库
app.use(ElemnetPlus);
// 注册全局组件
app.use(QComponents);
app.mount("#app");
