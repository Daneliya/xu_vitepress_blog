// .vitepress/sidebarConfig.mts
import {generateSidebar} from 'vitepress-sidebar';

// 通用侧边栏配置（所有侧边栏共享的规则）
export const vitepressSidebarOptions = {
    // documentRootPath: '/docs', // 基础根目录（可被单独侧边栏覆盖）
    // useFolderTitleFromIndexFile: true, // 用文件夹下index.md作为分组标题
    // useFolderLinkFromIndexFile: true, // 文件夹链接指向自身index.md
    // collapsed: false, // 侧边栏分组默认不折叠
    // collapseDepth: 4, // 支持展开2级子菜单
    // sortMenusByName: true, // 按文件名排序菜单
    // removePrefixAfterOrdering: false,
    // prefixSeparator: '.',
    // useTitleFromFrontmatter: true, // 从MD文件Frontmatter的title获取侧边栏标题
    documentRootPath: '/docs', //文档根目录（可被单独侧边栏覆盖）
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
    collapseDepth: 3, //折叠组2级菜单
    sortMenusByName: true,
    // sortMenusByFrontmatterOrder: false,
    // sortMenusByFrontmatterDate: false,
    // sortMenusOrderByDescending: false,
    // sortMenusOrderNumericallyFromTitle: true,
    sortMenusOrderNumericallyFromLink: true,
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
    debugPrint: true, // 关键：开启调试日志
};

// -------------------------- 核心：侧边栏通用创建方法（聚合重复逻辑） --------------------------
/**
 * 通用侧边栏创建方法
 * @param customOptions - 差异化配置（每个侧边栏的专属参数）
 * @returns 生成的侧边栏配置
 */
// const createSidebar = (customOptions: Partial<VitePressSidebarOptions & { scanStartPath?: string }>) => {
//     // 合并：通用配置 + 差异化配置（差异化配置优先级更高，可覆盖通用配置）
//     return generateSidebar({
//         ...vitepressSidebarOptions,
//         ...customOptions,
//     });
// };
function createSidebar(options) {
    console.log(options)
    return generateSidebar({
        ...vitepressSidebarOptions,
        documentRootPath: '/docs', // 默认根目录
        scanStartPath: options.scanStartPath, // 实际要扫描的根目录
        resolvePath: options.resolvePath, // 侧边栏链接基础路径
        basePath: options.basePath, // 侧边栏链接基础路径
    });
}

// 通用函数：生成侧边栏（返回 Promise<Array>)
// async function createSidebar(scanStartPath: string, resolvePath: string, basePath: string) {
//     return await generateSidebar({
//         ...vitepressSidebarOptions,
//         documentRootPath: '/docs',
//         scanStartPath,
//         resolvePath,
//         basePath,
//     })
// }

// -------------------------- 各导航专属侧边栏（路由隔离） --------------------------
// 1. Java教程侧边栏（匹配 /Java/ 路由）
export const java1Sidebar = generateSidebar({
    ...vitepressSidebarOptions,
    documentRootPath: '/docs', // 根目录
    scanStartPath: '/Java/Java开发技巧/', // 实际要扫描的根目录
    resolvePath: '/Java/Java开发技巧/', // 侧边栏链接基础路径
    basePath: '/Java/Java开发技巧/', // 侧边栏链接基础路径
});
export const java2Sidebar = generateSidebar({
    ...vitepressSidebarOptions,
    documentRootPath: '/docs', // 根目录
    scanStartPath: '/Java/JVM性能调优/', // 实际要扫描的根目录
    resolvePath: '/Java/JVM性能调优/', // 侧边栏链接基础路径
    basePath: '/Java/JVM性能调优/', // 侧边栏链接基础路径
});
export const java3Sidebar = generateSidebar({
    ...vitepressSidebarOptions,
    documentRootPath: '/docs', // 根目录
    scanStartPath: '/Java/并发编程/', // 实际要扫描的根目录
    resolvePath: '/Java/并发编程/', // 侧边栏链接基础路径
    basePath: '/Java/并发编程/', // 侧边栏链接基础路径
});
export const java4Sidebar = generateSidebar({
    ...vitepressSidebarOptions,
    documentRootPath: '/docs', // 根目录
    scanStartPath: '/Java/容器/', // 实际要扫描的根目录
    resolvePath: '/Java/容器/', // 侧边栏链接基础路径
    basePath: '/Java/容器/', // 侧边栏链接基础路径
});
export const java5Sidebar = generateSidebar({
    ...vitepressSidebarOptions,
    documentRootPath: '/docs', // 根目录
    scanStartPath: '/Java/设计模式/', // 实际要扫描的根目录
    resolvePath: '/Java/设计模式/', // 侧边栏链接基础路径
    basePath: '/Java/设计模式/', // 侧边栏链接基础路径
});
export const java6Sidebar = generateSidebar({
    ...vitepressSidebarOptions,
    documentRootPath: '/docs', // 根目录
    scanStartPath: '/Java/微服务专栏/', // 实际要扫描的根目录
    resolvePath: '/Java/微服务专栏/', // 侧边栏链接基础路径
    basePath: '/Java/微服务专栏/', // 侧边栏链接基础路径
});
export const java7Sidebar = generateSidebar({
    ...vitepressSidebarOptions,
    documentRootPath: '/docs', // 根目录
    scanStartPath: '/Java/架构设计/', // 实际要扫描的根目录
    resolvePath: '/Java/架构设计/', // 侧边栏链接基础路径
    basePath: '/Java/架构设计/', // 侧边栏链接基础路径
});
export const java8Sidebar = generateSidebar({
    ...vitepressSidebarOptions,
    documentRootPath: '/docs', // 根目录
    scanStartPath: '/Java/解决方案/', // 实际要扫描的根目录
    resolvePath: '/Java/解决方案/', // 侧边栏链接基础路径
    basePath: '/Java/解决方案/', // 侧边栏链接基础路径
});
export const java9Sidebar = generateSidebar({
    ...vitepressSidebarOptions,
    documentRootPath: '/docs', // 根目录
    scanStartPath: '/Java/数据结构/', // 实际要扫描的根目录
    resolvePath: '/Java/数据结构/', // 侧边栏链接基础路径
    basePath: '/Java/数据结构/', // 侧边栏链接基础路径
});
export const java10Sidebar = generateSidebar({
    ...vitepressSidebarOptions,
    documentRootPath: '/docs', // 根目录
    scanStartPath: '/Java/系统优化/', // 实际要扫描的根目录
    resolvePath: '/Java/系统优化/', // 侧边栏链接基础路径
    basePath: '/Java/系统优化/', // 侧边栏链接基础路径
});

// 2. Python教程侧边栏（匹配 /Python/ 路由）
export const pythonSidebar = generateSidebar({
    ...vitepressSidebarOptions,
    documentRootPath: '/docs/', // 仅扫描Python目录
    scanStartPath: '/Python/', // 仅扫描Python目录
    resolvePath: '/Python/', // 侧边栏链接基础路径
    basePath: '/Python/', // 侧边栏链接基础路径
});

// 数据库教程侧边栏（匹配 /Python/ 路由）
export const databaseSidebar = generateSidebar({
    ...vitepressSidebarOptions,
    documentRootPath: '/docs/', // 仅扫描Python目录
    scanStartPath: '/数据库/', // 仅扫描Python目录
    resolvePath: '/数据库/', // 侧边栏链接基础路径
    basePath: '/数据库/', // 侧边栏链接基础路径
});

// Redis教程侧边栏（匹配 /Python/ 路由）
export const redisSidebar = generateSidebar({
    ...vitepressSidebarOptions,
    documentRootPath: '/docs/', // 仅扫描Python目录
    scanStartPath: '/Redis/', // 仅扫描Python目录
    resolvePath: '/Redis/', // 侧边栏链接基础路径
    basePath: '/Redis/', // 侧边栏链接基础路径
});

// 常用框架教程侧边栏（匹配 /常用框架/ 路由）
export const frameSidebar = generateSidebar({
    ...vitepressSidebarOptions,
    documentRootPath: '/docs/', // 仅扫描Python目录
    scanStartPath: '/常用框架/', // 仅扫描Python目录
    resolvePath: '/常用框架/', // 侧边栏链接基础路径
    basePath: '/常用框架/', // 侧边栏链接基础路径
    excludeByGlobPattern: ['SpringAIAlibaba/'], // 根据文件模式字符串数组排除文件或文件夹
});

// 常用框架教程侧边栏（匹配 /常用框架/SpringAIAlibaba 路由）
export const frameAlibabaSidebar = generateSidebar({
    ...vitepressSidebarOptions,
    documentRootPath: '/docs/', // 仅扫描Python目录
    scanStartPath: '/常用框架/SpringAIAlibaba/', // 仅扫描Python目录
    resolvePath: '/常用框架/SpringAIAlibaba/', // 侧边栏链接基础路径
    basePath: '/常用框架/SpringAIAlibaba/', // 侧边栏链接基础路径
});

// linux教程侧边栏（匹配 /Python/ 路由）
export const linuxSidebar = generateSidebar({
    ...vitepressSidebarOptions,
    documentRootPath: '/docs/', // 仅扫描Python目录
    scanStartPath: '/Linux/', // 仅扫描Python目录
    resolvePath: '/Linux/', // 侧边栏链接基础路径
    basePath: '/Linux/', // 侧边栏链接基础路径
});

// StableDiffusion教程侧边栏（匹配 /Python/ 路由）
export const StableDiffusionSidebar = generateSidebar({
    ...vitepressSidebarOptions,
    documentRootPath: '/docs/', // 仅扫描Python目录
    scanStartPath: '/StableDiffusion/', // 仅扫描Python目录
    resolvePath: '/StableDiffusion/', // 侧边栏链接基础路径
    basePath: '/StableDiffusion/', // 侧边栏链接基础路径
});

// daily教程侧边栏（匹配 /Python/ 路由）
export const dailySidebar = generateSidebar({
    ...vitepressSidebarOptions,
    documentRootPath: '/docs/', // 仅扫描Python目录
    scanStartPath: '/daily/', // 仅扫描Python目录
    resolvePath: '/daily/', // 侧边栏链接基础路径
    basePath: '/daily/', // 侧边栏链接基础路径
    excludeByGlobPattern: ['面试专栏/', '博客文档/'], // 根据文件模式字符串数组排除文件或文件夹
});

// daily教程侧边栏（匹配 /Python/ 路由）
export const blogSidebar = generateSidebar({
    ...vitepressSidebarOptions,
    documentRootPath: '/docs/', // 仅扫描Python目录
    scanStartPath: '/daily/博客文档/', // 仅扫描Python目录
    resolvePath: '/daily/博客文档/', // 侧边栏链接基础路径
    basePath: '/daily/博客文档/', // 侧边栏链接基础路径
});

// daily教程侧边栏（匹配 /Python/ 路由）
export const interviewSidebar = generateSidebar({
    ...vitepressSidebarOptions,
    documentRootPath: '/docs/', // 仅扫描Python目录
    scanStartPath: '/daily/面试专栏/', // 仅扫描Python目录
    resolvePath: '/daily/面试专栏/', // 侧边栏链接基础路径
    basePath: '/daily/面试专栏/', // 侧边栏链接基础路径
});

// 4. 首页/独立页面：隐藏侧边栏（如首页、关于页）
const hiddenSidebarRoutes = {
    // '/': false, // 首页（根路径）隐藏侧边栏
    // '/about/': false, // 关于页目录下所有页面隐藏
    // '/changelog.md': false, // 单独的更新日志页隐藏
};


// -------------------------- 侧边栏总路由规则（核心：路由-侧边栏绑定） --------------------------
export const sidebarConfig = {
    // 1. 先配置「隐藏侧边栏」的路由（具体路由优先）
    ...hiddenSidebarRoutes,

    // 2. 各导航专属侧边栏（路由前缀匹配）
    '/Java/Java开发技巧/': java1Sidebar, // /Java/路由下显示Java侧边栏
    '/Java/JVM性能调优/': java2Sidebar, // /Java/路由下显示Java侧边栏
    '/Java/并发编程/': java3Sidebar, // /Java/路由下显示Java侧边栏
    '/Java/容器/': java4Sidebar, // /Java/路由下显示Java侧边栏
    '/Java/设计模式/': java5Sidebar, // /Java/路由下显示Java侧边栏
    '/Java/微服务专栏/': java6Sidebar, // /Java/路由下显示Java侧边栏
    '/Java/架构设计/': java7Sidebar, // /Java/路由下显示Java侧边栏
    '/Java/解决方案/': java8Sidebar, // /Java/路由下显示Java侧边栏
    '/Java/数据结构/': java9Sidebar, // /Java/路由下显示Java侧边栏
    '/Java/系统优化/': java10Sidebar, // /Java/路由下显示Java侧边栏
    '/Python/': pythonSidebar, // /Python/路由下显示Python侧边栏
    '/数据库/': databaseSidebar, // /Python/路由下显示Python侧边栏
    '/Redis/': redisSidebar, // /Python/路由下显示Python侧边栏
    '/常用框架/': frameSidebar, // /Python/路由下显示Python侧边栏
    '/常用框架/SpringAIAlibaba/': frameAlibabaSidebar, // /Python/路由下显示Python侧边栏
    '/Linux/': linuxSidebar, // /Python/路由下显示Python侧边栏
    '/StableDiffusion/': StableDiffusionSidebar, // /Python/路由下显示Python侧边栏
    '/daily/': dailySidebar, // /Python/路由下显示Python侧边栏
    '/daily/博客文档/': blogSidebar, // /Python/路由下显示Python侧边栏
    '/daily/面试专栏/': interviewSidebar, // /Python/路由下显示Python侧边栏
    // 2. 各导航专属侧边栏（调用通用方法，传入差异化参数）
    // '/Java/Java开发技巧/': createSidebar({
    //     scanStartPath: '/Java/Java开发技巧/',
    //     resolvePath: '/Java/Java开发技巧/',
    //     basePath: '/Java/Java开发技巧/'
    // }),
    // '/Java/JVM性能调优/': createSidebar({
    //     scanStartPath: '/Java/JVM性能调优/',
    //     resolvePath: '/Java/JVM性能调优/',
    //     basePath: '/Java/JVM性能调优/'
    // }),
    // '/Python/': createSidebar({scanStartPath: '/Python/', resolvePath: '/Python/', basePath: '/Python/'}),
    // '/数据库/': createSidebar({scanStartPath: '/数据库/', resolvePath: '/数据库/', basePath: '/数据库/'}),
    // '/Redis/': createSidebar({scanStartPath: '/Redis/', resolvePath: '/Redis/', basePath: '/Redis/'}),
    // '/常用框架/': createSidebar({scanStartPath: '/常用框架/', resolvePath: '/常用框架/', basePath: '/常用框架/'}),
    // '/Linux/': createSidebar({scanStartPath: '/Linux/', resolvePath: '/Linux/', basePath: '/Linux/'}),
    // '/StableDiffusion/': createSidebar({scanStartPath: '/StableDiffusion/', resolvePath: '/StableDiffusion/', basePath: '/StableDiffusion/'}),
    // '/daily/': createSidebar({scanStartPath: '/daily/', resolvePath: '/daily/', basePath: '/daily/'}),

    // 3. 兜底规则：未匹配到的路由隐藏侧边栏
    '**': false,
};

