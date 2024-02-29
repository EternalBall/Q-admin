import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

import UnoCss from "unocss/vite";
import path from "path";

export default defineConfig({
    plugins: [
        vue(),
        UnoCss(),
        createSvgIconsPlugin({
            iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
            symbolId: "icon-[dir]-[name]",
        }),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    resolve: {
        // 配置路径别名
        alias: {
            "@": path.resolve("./src"), // 相对路径别名配置，使用 @ 代替 src
            "~": path.resolve("./src"),
        },
    },
    css: {
        // css全局变量使用，@/styles/variable.scss文件
        preprocessorOptions: {
            scss: {
                javascriptEnabled: true,
                additionalData: '@import "./src/styles/variable.scss";',
            },
        },
    },
});
