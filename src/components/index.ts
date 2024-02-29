import type { App, Component } from "vue";
import SvgIcon from "./SvgIcon/index.vue";

// 创建组件名单
const components: { [name: string]: Component } = {
    SvgIcon,
};
// 注册组件
export default {
    install(app: App) {
        Object.keys(components).forEach((componentName) => {
            const component = components[componentName];
            app.component(componentName, component); // 注册全局组件
        });
    },
};
