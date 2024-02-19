import { defineStore } from "pinia";
import authMenu from "@/assets/json/authMenu.json";
import authUser from "@/assets/json/authUser.json";

import { staticRouter } from "@/router/modules/staticRoute";
import { generFlattenRoutes, generateRoutes } from "@/utils/fileterRoute";
import { getShowStaticMenuList, getShowDynamicMenuList, getAllBreadcrumbList } from "@/utils/index";

const authStore = defineStore("auth", {
    state: (): any => {
        return {
            // 扁平路由
            menuList: [],
            // 菜单数据
            recursiveMenuList: [],
            // 用户角色
            roleList: [],
            // 按钮权限列表
            buttonList: [],
            // 用户信息
            userObject: {
                userId: "",
                loginName: "",
                sex: "",
                avatar: "",
            },
        };
    },
    actions: {
        async listRouters() {
            // 将后端数据进行扁平化转路由
            this.menuList = generFlattenRoutes(authMenu.data);
            this.recursiveMenuList = getShowStaticMenuList(staticRouter).concat(
                generateRoutes(getShowDynamicMenuList(authMenu.data), 0)
            );
        },
        // 获取角色数据 AND 按钮数据 AND 用户信息
        async getLoginUserInfo() {
            // console.log("用户信息数据", authUser.data);
            this.roleList = authUser.data.roles;
            this.buttonList = authUser.data.buttons;
            this.userObject = authUser.data.user;
        },
    },
    // 计算属性，和vuex是使用一样，getters里面不是方法，是计算返回的结果值
    getters: {
        // 按钮权限列表
        getButtonList: (state) => state.buttonList,
        // 菜单权限列表 ==> 原始后端接口菜单数据，扁平化之后的一维数组菜单，主要用来添加动态路由
        getMenuList: (state) => state.menuList,
        // 菜单权限列表 ==> 左侧菜单栏渲染，这里的菜单将后端数据进行递归，需要将动态路由 isHide == 0 的剔除, 将静态路由 isHide == 0 的剔除
        showMenuList: (state) => state.recursiveMenuList,
        // 递归处理后的所有面包屑导航列表
        getBreadcrumbList: (state) => getAllBreadcrumbList(state.recursiveMenuList),
    },
});
export default authStore;
