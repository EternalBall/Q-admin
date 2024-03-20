import { ConfigEnv, UserConfig, defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

import UnoCss from "unocss/vite";
import path from "path";

export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
    const env = loadEnv(mode, process.cwd()); // 获取配置文件别名配置
    return {
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
        server: {
            host: "0.0.0.0",
            port: 1024,
            hmr: true, // 热更新
            open: true,
            // proxy: {
            //     // 代理跨域
            //     [env.VITE_SERVER]: {
            //         // 配置哪个环境下的
            //         target: env.VITE_SERVER,
            //         rewrite: (path) => path.replace(/^\/dev-api/, ""), // 路径重写，例如：将路径中包含dev-api字段替换为空。注意：只有请求真实后端接口才会有用，使用mock接口还是得带koi
            //         // 允许跨域
            //         changeOrigin: true,
            //     },
            // },
        },
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
    };
});
