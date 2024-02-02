// 创建pinia
import { createPinia } from "pinia";
// pinia持久化
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
// 抛出仓库
export default pinia;
