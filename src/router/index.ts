import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import { layoutRouter, staticRouter, errorRouter } from "@/router/modules/staticRoute";

// 读取env配置
const mode = import.meta.env.VITE_ROUTER_MODE;

// 路由模式
const routerMode: any = {
    hash: () => createWebHashHistory(),
    history: () => createWebHistory(),
};

// 创建路由
const router = createRouter({
    history: routerMode[mode](),
    routes: [...layoutRouter, ...staticRouter, ...errorRouter],
    strict: false,
    scrollBehavior() {
        return { left: 0, top: 0 };
    },
});

export default router;
