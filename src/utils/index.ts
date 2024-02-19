/**
 * @description 使用递归过滤出需要渲染在左侧菜单静态的列表 (isHide == 0 隐藏的菜单无需剔除)，解决字典详情isHide == 0 隐藏菜单没法访问该页面问题，最后递归菜单组件再将 isHide == 0 的去除不进行显示。
 * @param {Array} menuList 菜单列表
 * @returns {Array}
 * */
export function getShowStaticMenuList(menuList: any) {
    let newMenuList: any = JSON.parse(JSON.stringify(menuList)); // 深拷贝数据
    return newMenuList.filter((item: any) => {
        // 返回 需要显示的数据
        return item.isHide == "1" || item.meta?.isHide == "1" || item.isHide == "0" || item.meta?.isHide == "0";
    });
}

/**
 * @description 使用递归过滤出需要渲染在左侧菜单动态数据的列表 (需剔除 isHide == 0 隐藏的菜单)
 * @param {Array} menuList 菜单列表
 * @returns {Array}
 * */
export function getShowDynamicMenuList(menuList: any) {
    let newMenuList: any = JSON.parse(JSON.stringify(menuList));
    return newMenuList.filter((item: any) => {
        return item.isHide == "1" || item.meta?.isHide == "1";
    });
}

/**
 * @description 使用递归找出所有面包屑存储到 pinia 中
 * @param {Array} menuList 菜单列表
 * @param {Array} parent 父级菜单
 * @param {Object} result 处理后的结果
 * @returns {Object}
 */
export const getAllBreadcrumbList = (menuList: any, parent = [], result: { [key: string]: any } = {}) => {
    // 枚举对象
    for (const item of menuList) {
        result[item.path] = [...parent, item];

        if (item.children) getAllBreadcrumbList(item.children, result[item.path], result);
    }
    return result;
};
