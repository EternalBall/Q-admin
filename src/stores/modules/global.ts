import { DEFAULT_THEME, PINIA_PREFIX } from "@/config";
import { defineStore } from "pinia";

const globalStore = defineStore("global", {
    persist: {
        // enabled: true, // true 表示开启持久化保存
        key: PINIA_PREFIX + "global", // 默认会以 store 的 id 作为 key
        storage: localStorage,
    },
    state: () => {
        return {
            // 是否全屏
            isFullScreen: false,
            // 是否折叠菜单
            isCollapse: false,
            // 菜单展开宽度[默认：220px]
            menuWidth: 220,
            // 菜单左边框颜色
            menuBLSColor: "",
            // 默认关闭黑暗模式
            isDark: false,
            // ElementPlus 尺寸大小
            dimension: "default",
            // 当前页面是否全屏
            maximize: false,
            // 当前系统语言[默认中文]
            language: "zh",
            // 选择主题[默认兔子坦克形态]
            themeColor: DEFAULT_THEME,
            // 布局模式 (纵向：vertical | 经典：classic | 横向：crosswise | 分栏：column)
            layout: "vertical",
            // 路由动画
            transition: "fade-default",
            // 菜单是否可展开单个[默认：true仅仅一个]
            uniqueOpened: true,
            // 灰色模式
            isGrey: false,
            // 色弱模式
            isWeak: false,
            // 侧边栏反转
            asideInverted: false,
            // 头部反转
            headerInverted: false,
        };
    },
    actions: {
        // 设置左侧菜单边框颜色[纵向和经典布局]
        setMenuBLSColor() {
            if (this.isDark) {
                // 暗黑
                this.menuBLSColor = "#121212";
            } else {
                // 明亮
                this.menuBLSColor = "#ffffff";
            }
            return this.menuBLSColor;
        },
        // 侧边栏开关
        setCollapse(value: Boolean) {
            this.isCollapse = !value;
            return this.isCollapse;
        },
        // 设置当前global.ts所有参数值
        setGlobalState(...val: any) {
            this.$patch({ [val[0]]: val[1] });
        },
        // 设置ElementPlus尺寸
        setDimension(value: string) {
            this.dimension = value;
        },
    },
});
export default globalStore;
