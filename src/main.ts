import { createApp } from "vue";
import "element-plus/dist/index.css";
import ElemnetPlus from "element-plus";
import App from "./App.vue";
import router from "./router";
import pinia from "./stores";

import "animate.css";
import "./styles/index.scss";

import "uno.css";

const app = createApp(App);
// 注册路由
app.use(router);
// 注册pinia
app.use(pinia);
// 注册ui组件库
app.use(ElemnetPlus);
app.mount("#app");
