import {defineConfig} from 'vitepress'
import nav from "./nav.mjs";
import sidebar from "./sidebar.mjs";
import AutoSidebar from "@iminu/vitepress-plugin-auto-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "My Awesome Project",
    description: "A VitePress Site",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        // 顶部跳转
        nav,
        // 侧边栏跳转
        sidebar,

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    },
    markdown: {
        // 行号
        lineNumbers: true,
        image: {
            // 默认禁用；设置为 true 可为所有图片启用懒加载。
            lazyLoading: true
        }
    },
    vite: {
        plugins: [
            AutoSidebar(),
        ],
    },
})
