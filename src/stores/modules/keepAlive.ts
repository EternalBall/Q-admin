import { defineStore } from "pinia";

const keepAliveStore = defineStore("keepAlive", {
    state: (): any => {
        return {
            keepAliveName: [],
        };
    },
    actions: {
        // 该方法用于向 keepAliveName 数组中添加新的名称。如果数组中已经存在相同的名称，则不会重复添加。
        async addKeepAliveName(name: string) {
            !this.keepAliveName.includes(name) && this.keepAliveName.push(name);
        },
        // 该方法用于从 keepAliveName 数组中移除指定的名称。使用 filter 方法过滤出不等于指定名称的元素，重新赋值给 keepAliveName 数组。
        async removeKeepAliveName(name: string) {
            this.keepAliveName = this.keepAliveName.filter((item: any) => item !== name);
        },
        // 该方法用于设置 keepAliveName 数组的值。可以传入一个新的字符串数组作为参数，如果没有传入参数则默认为空数组。
        async setKeepAliveName(keepAliveName: string[] = []) {
            this.keepAliveName = keepAliveName;
        },
    },
    getters: {},
});
export default keepAliveStore;
