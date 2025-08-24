import {defineConfig} from 'vitepress'
import nav from "./nav.mjs";
// import customSidebar from "./customSidebar.mjs";
// import AutoSidebar from "@iminu/vitepress-plugin-auto-sidebar";
import {generateSidebar} from 'vitepress-sidebar';
// import { getSidebarData, getNavData } from './navSidebarUtil'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "xiaolong", //站点名
    description: "我的文档教程", //站点描述
    titleTemplate: 'XXL的小屋',
    // fav图标
    head: [
        ['link', {rel: 'icon', href: '/logo.png'}],
    ],
    themeConfig: {
        // 左上角logo
        logo: '/logo.png',
        // 设置站点标题
        siteTitle: 'xiaolong',
        // 标题开启或隐藏
        // siteTitle: true,
        // 本地搜索
        search: {
            provider: 'local'
        },
        // 站点地图
        sitemap: {
            hostname: 'https://luckilyxxl.xyz',
        },
        // 右侧的大纲，默认显示是二级标题
        outline: {
            level: [2, 3, 4], // 显示2-4级标题
            // level: 'deep', // 显示2-6级标题
            label: '当前页大纲' // 文字显示
        },
        // 顶部跳转
        nav,
        // 侧边栏跳转
        sidebar: generateSidebar(vitepressSidebarOptions),
        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ],
        //页脚
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-2025 present Xu XiaoLong',
            // 自动更新时间
            //copyright: `Copyright © 2019-${new Date().getFullYear()} present Evan You`,
        },
        //返回顶部文字修改
        returnToTopLabel: '返回顶部',
        // lastUpdated: true, //首次配置不会立即生效，需git提交后爬取时间戳
        // 上次更新时间
        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'full',  // 可选值full、long、medium、short
                timeStyle: 'medium'  // 可选值full、long、medium、short
            }
        },
        // 自定义上下页名
        docFooter: {
            prev: "上一页",
            next: "下一页",
        },
    },
    markdown: {
        // 行号
        lineNumbers: true,
        image: {
            // 默认禁用；设置为 true 可为所有图片启用懒加载。
            lazyLoading: true
        },
        math: true
    },
})

const vitepressSidebarOptions = {
    documentRootPath: '/docs', //文档根目录
    // scanStartPath: null,
    // resolvePath: null,
    // useTitleFromFileHeading: true,
    // useTitleFromFrontmatter: true,
    // frontmatterTitleFieldName: 'title',
    useFolderTitleFromIndexFile: true, //是否使用层级首页文件名做分级标题
    useFolderLinkFromIndexFile: true, //是否链接至层级首页文件
    // hyphenToSpace: true,
    // underscoreToSpace: true,
    // capitalizeFirst: false,
    // capitalizeEachWords: false,
    collapsed: false, //折叠组关闭
    collapseDepth: 2, //折叠组2级菜单
    sortMenusByName: true,
    // sortMenusByFrontmatterOrder: false,
    // sortMenusByFrontmatterDate: false,
    // sortMenusOrderByDescending: false,
    // sortMenusOrderNumericallyFromTitle: false,
    // sortMenusOrderNumericallyFromLink: false,
    // frontmatterOrderDefaultValue: 0,
    // manualSortFileNameByPriority: ['first.md', 'second', 'third.md'], //手动排序，文件夹不用带后缀
    removePrefixAfterOrdering: false, //删除前缀，必须与prefixSeparator一起使用
    prefixSeparator: '.', //删除前缀的符号
    // excludeFiles: ['first.md', 'secret.md'],
    // excludeFilesByFrontmatterFieldName: 'exclude',
    // excludeFolders: ['secret-folder'],
    // includeDotFiles: false,
    // includeRootIndexFile: false,
    // includeFolderIndexFile: false, //是否包含层级主页
    // includeEmptyFolder: false,
    // rootGroupText: 'Contents',
    // rootGroupLink: 'https://github.com/jooy2',
    // rootGroupCollapsed: false,
    // convertSameNameSubFileToGroupIndexPage: false,
    // folderLinkNotIncludesFileName: false,
    // keepMarkdownSyntaxFromTitle: false,
    // debugPrint: false,
    useTitleFromFrontmatter: true, // 根据文件Frontmatter中title的值显示标题

};

const withSidebar = [
    {
        documentRootPath: 'docs',
        scanStartPath: 'Java',
        basePath: '/Java/',
        resolvePath: '/Java/',
        useTitleFromFileHeading: true
    },
    {
        documentRootPath: 'docs',
        scanStartPath: 'Python',
        resolvePath: '/Python/',
        useTitleFromFrontmatter: true
    }
]