import { HOME_URL } from "@/config";
import Layout from "@/layout/index.vue";

export const layoutRouter = [
    {
        path: "/",
        name: "layout",
        component: Layout,
        redirect: HOME_URL,
        children: [
            {
                path: HOME_URL,
                component: () => import("@/views/home/index.vue"),
                meta: {
                    title: "首页", // 标题
                    icon: "HomeFilled", // 图标
                    isHide: "0", // 代表路由在菜单中是否隐藏，是否隐藏（0隐藏，1显示）
                    isLink: "", // 是否外链（有值则是外链）
                    isKeepAlive: "0", // 是否缓存路由数据（0是，1否）
                    isFull: "1", // 是否缓存全屏（0是，1否）
                    isAffix: "1", // 是否缓存固定路由（0是，1否）
                },
            },
        ],
    },
];
