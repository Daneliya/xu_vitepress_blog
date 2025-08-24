

> 官方文档：[https://vitepress.dev/zh/](https://vitepress.dev/zh/)
>
> 快速上手教程：[https://vitepress.yiov.top/](https://vitepress.yiov.top/)

## VitePress 是什么？

VitePress 是一个[静态站点生成器](https://en.wikipedia.org/wiki/Static_site_generator) (SSG)，专为构建快速、以内容为中心的站点而设计。简而言之，VitePress 获取用 Markdown 编写的内容，对其应用主题，并生成可以轻松部署到任何地方的静态 HTML 页面。

## VitePress 与VuePres区别



## 快速开始

### 环境准备

~~~
nodejs version >= 18
~~~

### 安装

然后我们安装vitepress

~~~sh
npm add -D vitepress@next
# alpha版本
# npm i -D vitepress@2.0.0-alpha.6
~~~

### 初始化向导

VitePress 附带一个命令行设置向导，构建一个基本项目。安装后，通过运行以下命令启动向导：

~~~sh
npx vitepress init
~~~

回答几个简单的问题：

~~~sh
┌  Welcome to VitePress!
│
◇  Where should VitePress initialize the config?
│  ./docs
│
◇  Where should VitePress look for your markdown files?
│  ./docs
│
◇  Site title:
│  My Awesome Project
│
◇  Site description:
│  A VitePress Site
│
◇  Theme:
│  Default Theme
│
◇  Use TypeScript for config and theme files?
│  Yes
│
◇  Add VitePress npm scripts to package.json?
│  Yes
│
◇  Add a prefix for VitePress npm scripts?
│  Yes
│
◇  Prefix for VitePress npm scripts:
│  docs
│
└  Done! Now run pnpm run docs:dev and start writing.
~~~

### 文件结构

~~~markdown
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  ├─ api-examples.md
│  ├─ markdown-examples.md
│  └─ index.md
└─ package.json
~~~

`docs` 目录作为 VitePress 站点的项目**根目录**。`.vitepress` 目录是 VitePress 配置文件、开发服务器缓存、构建输出和可选主题自定义代码的位置。

默认情况下，VitePress 将其开发服务器缓存存储在 `.vitepress/cache` 中，并将生产构建输出存储在 `.vitepress/dist` 中。如果使用 Git，应该将它们添加到 `.gitignore` 文件中。







[(3 封私信 / 80 条消息) 十分钟教会你如何使用VitePress搭建及部署个人博客站点 - 知乎](https://zhuanlan.zhihu.com/p/551291839)

[像编写文档一样轻松构建你的官网！-VitePress保姆级教程_vitepress模板-CSDN博客](https://blog.csdn.net/qq_44793507/article/details/142521250)

侧边栏

[VitePress Sidebar | 功能强大的自动侧边栏生成器](https://vitepress-sidebar.cdget.com/zhHans/)

[🌟 Vitepress 侧边栏自动生成，让你更专注写作Vitepress 有个痛点，无法根据目录自动生成侧边栏。每次新 - 掘金](https://juejin.cn/post/7227358177489961018)