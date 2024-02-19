import { HOME_URL } from "@/config";
import Layout from "@/layout/index.vue";
import { RouteRecordRaw } from "vue-router";

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

/**
 * LayoutRouter (布局路由)
 */
export const staticRouter: RouteRecordRaw[] = [
    /** 首页 */
    {
        path: "/home/index", // （唯一）
        component: () => import("@/views/home/index.vue"),
        meta: {
            title: "首页", // 标题
            icon: "HomeFilled", // 图标 HomeFilled
            isHide: "1", // 代表路由在菜单中是否隐藏，是否隐藏（0隐藏，1显示）
            isLink: "", // 是否外链（有值则是外链）
            isKeepAlive: "0", // 是否缓存路由数据（0是，1否）
            isFull: "1", // 是否缓存全屏（0是，1否）
            isAffix: "1", // 是否缓存固定路由（0是，1否）
        },
    },
    {
        path: "/system/dictData", // 路由访问路径（唯一）
        name: "systemDictDataPage", // 命名路由（唯一）
        component: Layout, // 一级路由，可以将子路由放置Main模块中
        meta: {
            title: "静态路由", // 标题
            icon: "Tools", // 图标
            isHide: "0", // 代表路由在菜单中是否隐藏，是否隐藏（0隐藏，1显示）
            isLink: "", // 是否外链（有值则是外链）
            isKeepAlive: "1", // 是否缓存路由数据（0是，1否）
            isFull: "1", // 是否缓存全屏（0是，1否）
            isAffix: "1", // 是否缓存固定路由（0是，1否）
        },
        children: [
            {
                path: "/system/dict/data/:dictType", // 路由访问路径（唯一）
                name: "dictDataPage", // 命名路由（唯一）
                component: () => import("@/views/system/dict/data.vue"), // 一级路由，可以将子路由放置Main模块中
                meta: {
                    title: "字典详情", // 标题
                    icon: "Flag", // 图标
                    isHide: "0", // 代表路由在菜单中是否隐藏，是否隐藏（0隐藏，1显示）
                    isLink: "", // 是否外链（有值则是外链）
                    isKeepAlive: "0", // 是否缓存路由数据（0是，1否）
                    isFull: "1", // 是否缓存全屏（0是，1否）
                    isAffix: "1", // 是否缓存固定路由（0是，1否）
                },
            },
        ],
    },
    /** 系统管理 */
    // {
    //   path: "/system", // 路由访问路径（唯一）
    //   name: "system", // 命名路由（唯一）
    //   component: Layout, // 一级路由，可以将子路由放置Main模块中
    //   redirect: "/system/user", // path路径，<router-link name="/404"> 也是使用path进行跳转
    //   meta: {
    //     title: "系统管理", // 标题
    //     icon: "Tools", // 图标
    //     isHide: "1", // 代表路由在菜单中是否隐藏，是否隐藏（0隐藏，1显示）
    //     isLink: "", // 是否外链（有值则是外链）
    //     isKeepAlive: "0", // 是否缓存路由数据（0是，1否）
    //     isFull: "1", // 是否缓存全屏（0是，1否）
    //     isAffix: "1" // 是否缓存固定路由（0是，1否）
    //   },
    //   children: [
    //     {
    //       path: "/system/user", // （唯一）
    //       name: "userPage",
    //       component: () => import("@/views/system/user/index.vue"),
    //       meta: {
    //         title: "用户管理", // 标题
    //         icon: "UserFilled", // 图标
    //         isHide: "1", // 代表路由在菜单中是否隐藏，是否隐藏（0隐藏，1显示）
    //         isLink: "", // 是否外链（有值则是外链）
    //         isKeepAlive: "0", // 是否缓存路由数据（0是，1否）
    //         isFull: "1", // 是否缓存全屏（0是，1否）
    //         isAffix: "1" // 是否缓存固定路由（0是，1否）
    //       }
    //     },
    //     {
    //       path: "/system/role", // （唯一）
    //       name: "rolePage",
    //       component: () => import("@/views/system/role/index.vue"),
    //       meta: {
    //         title: "角色管理", // 标题
    //         icon: "CameraFilled", // 图标
    //         isHide: "1", // 代表路由在菜单中是否隐藏，是否隐藏（0隐藏，1显示）
    //         isLink: "", // 是否外链（有值则是外链）
    //         isKeepAlive: "0", // 是否缓存路由数据（0是，1否）
    //         isFull: "1", // 是否缓存全屏（0是，1否）
    //         isAffix: "1" // 是否缓存固定路由（0是，1否）
    //       }
    //     },
    //     {
    //       path: "/system/menu", // （唯一）
    //       name: "menu",
    //       component: () => import("@/views/system/menu/index.vue"),
    //       meta: {
    //         title: "菜单管理", // 标题
    //         icon: "Menu", // 图标
    //         isHide: "1", // 代表路由在菜单中是否隐藏，是否隐藏（0隐藏，1显示）
    //         isLink: "", // 是否外链（有值则是外链）
    //         isKeepAlive: "0", // 是否缓存路由数据（0是，1否）
    //         isFull: "1", // 是否缓存全屏（0是，1否）
    //         isAffix: "1" // 是否缓存固定路由（0是，1否）
    //       }
    //     }
    //   ]
    // }
];
