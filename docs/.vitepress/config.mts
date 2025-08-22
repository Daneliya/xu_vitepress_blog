import {defineConfig} from 'vitepress'
import nav from "./nav.mjs";
// import AutoSidebar from "@iminu/vitepress-plugin-auto-sidebar";
import {generateSidebar} from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "My Awesome Project",
    description: "A VitePress Site",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        // 顶部跳转
        nav,
        // 侧边栏跳转
        // sidebar,
        sidebar: generateSidebar({
            /*
      * For detailed instructions, see the links below:
      * https://vitepress-sidebar.jooy2.com/guide/api
      */
            documentRootPath: '/docs', //文档根目录
            // scanStartPath: null,
            // resolvePath: null,
            // useTitleFromFileHeading: true,
            // useTitleFromFrontmatter: true,
            // frontmatterTitleFieldName: 'title',
            // useFolderTitleFromIndexFile: false, //是否使用层级首页文件名做分级标题
            // useFolderLinkFromIndexFile: false, //是否链接至层级首页文件
            // hyphenToSpace: true,
            // underscoreToSpace: true,
            // capitalizeFirst: false,
            // capitalizeEachWords: false,
            collapsed: false, //折叠组关闭
            collapseDepth: 2, //折叠组2级菜单
            // sortMenusByName: false,
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
        }),
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
    // vite: {
    //     plugins: [
    //         AutoSidebar(),
    //     ],
    // },
})

const vitepressSidebarOptions = {
    /* Options... */
    /*
     * For detailed instructions, see the links below:
     * https://vitepress-sidebar.jooy2.com/guide/api
     */
    documentRootPath: '/docs', //文档根目录
    // scanStartPath: null,
    // resolvePath: null,
    // useTitleFromFileHeading: true,
    // useTitleFromFrontmatter: true,
    // frontmatterTitleFieldName: 'title',
    // useFolderTitleFromIndexFile: false, //是否使用层级首页文件名做分级标题
    // useFolderLinkFromIndexFile: false, //是否链接至层级首页文件
    // hyphenToSpace: true,
    // underscoreToSpace: true,
    // capitalizeFirst: false,
    // capitalizeEachWords: false,
    collapsed: false, //折叠组关闭
    collapseDepth: 2, //折叠组2级菜单
    // sortMenusByName: false,
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
};
