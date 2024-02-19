import { HOME_URL } from "@/config";
import router from "@/router/index";
import Layout from "@/layout/index.vue";

/**
 * 初始化动态路由[用于生成扁平化一级路由，将后端一级路由数据转化为前端router格式的一级路由]
 */
export function generFlattenRoutes(data: any[]) {
    // 1.获取动态路由组件地址
    let modules = import.meta.glob("@/views/*.vue");
    const routes: any = [];
    // 2.循环生成vue路由
    data.forEach((item) => {
        const componentTemplate = item.component;
        const route: any = {
            path: `${item.path}`,
            name: `${item.name}`,
            component: item.component ? modules[`/src/views/${componentTemplate}.vue`] : Layout,
            meta: {
                parentId: item.parentid,
                title: item.menuName,
                icon: item.icon,
                isHide: item.isHide,
                isKeepLive: item.isKeepLive,
                isLink: item.isLink,
                isFull: item.isFull,
                isAffix: item.isAffix,
            },
        };
        if (item.menuType == "1") {
            route.redirect = `${item?.redirect}` || HOME_URL;
        }
        routes.push(route);
    });
    return routes;
}

/**
 * 递归生成路由,仅需要调用一次
 * @param data
 * @param parentId
 * @returns
 */
export function generateRoutes(data: any[], parentId: any) {
    let modules = import.meta.glob("@/views/*.vue");
    const routeList: any = [];
    data.forEach((item, i) => {
        if (item && !router.hasRoute(item.path) && item.parentId == parentId) {
            const routeTemplate = item.component;
            const route: any = {
                path: `${item.path}`,
                name: `${item.name}`,
                component: item.component ? modules[`/src/views/${routeTemplate}.vue`] : Layout,
                meta: {
                    title: item.menuName,
                    icon: item.icon,
                    isHide: item.isHide,
                    isKeepLive: item.isKeepLive,
                    isLink: item.isLink,
                    isFull: item.isFull,
                    isAffix: item.isAffix,
                },
            };
            if (item.menuType == "1") {
                route.redirect = `${item?.redirect}` || HOME_URL;
            }
            // 处理子节点
            const children = generateRoutes(data, item.menuId);
            if (children.length > 0) {
                route.children = children;
            }
            routeList.push(route);
        }
    });
    return routeList;
}
