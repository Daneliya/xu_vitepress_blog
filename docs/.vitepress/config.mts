import {defineConfig} from 'vitepress'
import nav from "./nav.mjs";
import { sidebarConfig } from "./sidebarConfig.mts";

// -------------------------- VitePress 主配置 --------------------------
export default defineConfig({
    title: "xiaolong", // 站点名
    description: "我的文档教程", // 站点描述
    titleTemplate: 'XXL的小屋',
    head: [
        ['link', {rel: 'icon', href: '/logo.png'}], // fav图标
    ],
    base: '/', //网站部署的路径，默认根目录
    themeConfig: {
        logo: '/logo.png', // 左上角logo
        siteTitle: 'xiaolong', // 左上角站点标题
        search: {
            provider: 'local' // 本地搜索
        },
        sitemap: {
            hostname: 'https://luckilyxxl.xyz', // 站点地图主机名
        },
        outline: {
            level: [2, 3, 4], // 右侧大纲显示2-4级标题
            label: '当前页大纲'
        },
        nav, // 顶部导航（需确保nav的链接与侧边栏路由前缀一致）
        sidebar: sidebarConfig, // 关键：启用隔离的侧边栏规则
        // sidebar: {
        //     "/Java": set_sidebar("Java"),
        //     "/Python": set_sidebar("nuxt3")
        // },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-2025 present Xu XiaoLong',
        },
        returnToTopLabel: '返回顶部',
        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'full',
                timeStyle: 'medium'
            }
        },
        docFooter: {
            prev: "上一页",
            next: "下一页",
        },
    },
    markdown: {
        lineNumbers: true, // 代码行号
        image: {
            lazyLoading: true // 图片懒加载
        },
        math: true // 支持数学公式
    },
})