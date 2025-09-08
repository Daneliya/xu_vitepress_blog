// nav.mts
export default [
    {text: '🏠主页', link: '/'},
    // {text: 'Examples', link: '/markdown-examples'},
    // {text: 'Java', link: '/Java/Java开发技巧/IDEA/IDEA使用技巧', activeMatch: "/Java"},
    // {text: 'Python', link: '/Python/基础语法/Python基础语法', activeMatch: "/Python"}
    {
        "text": "🍎Java",
        // "icon": "iconfont icon-cafei",
        "icon": "/icon/MySQL.png",
        "items": [
            {
                "text": "Java开发技巧",
                // "icon": "iconfont icon-LBhouduanfuwuzu",
                "icon": "/.vitepress/public/icon/cafei.png",
                "link": "/Java/Java开发技巧/高效编程/1_资源关闭优化方案"
            },
            {
                "text": "JVM性能调优",
                "icon": "iconfont icon-duozhongzhifu",
                "link": "/Java/JVM性能调优/JVM概念/0_JVM体系结构"
            },
            {
                "text": "并发编程",
                "icon": "iconfont icon-bingfashuliang",
                "link": "/Java/并发编程/JUC"
            },
            {
                "text": "容器相关",
                "icon": "iconfont icon-rongqi",
                "link": "/Java/容器/Docker/0_Docker介绍及使用",
            },
            {
                "text": "设计模式",
                "icon": "iconfont icon-iconfontmoshi",
                "link": "/Java/设计模式/1基本概念/设计模式",
            },
            {
                "text": "微服务专栏",
                "icon": "iconfont icon-mseweifuwuyinqing",
                "link": "/Java/微服务专栏/SpringCloud/1_SpringCloud简介"
            },
            {
                "text": "架构设计",
                "icon": "iconfont icon-jiagou",
                "link": "/Java/架构设计/分布式/分布式事务/分布式事务Seata"
            },
            {
                "text": "解决方案",
                "icon": "iconfont icon-zhifubaozhifu",
                "link": "/Java/解决方案/支付解决方案/支付宝支付API对接指南/1_商家基本信息获取"
            },
            {
                "text": "数据结构",
                "icon": "iconfont icon-shujujiegou",
                "link": "/Java/数据结构/排序算法"
            },
            {
                "text": "系统优化",
                "icon": "iconfont icon-icon_nav_xitongyouhua_default",
                "link": "/Java/系统优化/系统优化/1_幂等设计"
            }
        ]
    },
    {
        "text": "🥭Python",
        "icon": "iconfont icon-python",
        "items": [
            {
                "text": "基础语法",
                "icon": "iconfont icon-jichuyufa",
                "link": "/Python/基础语法/Python基础语法"
            },
            {
                "text": "数据分析",
                "icon": "iconfont icon-shujufenxi",
                "link": "/Python/数据分析/1_Python数据分析"
            },
            {
                "text": "爬虫",
                "icon": "iconfont icon-AIdamoxing",
                "link": "/Python/爬虫/1_爬虫的流程"
            },
            {
                "text": "AI大模型应用开发",
                "icon": "iconfont icon-AIdamoxing",
                "link": "/Python/AI大模型应用开发/1_AI大模型科普"
            }
        ]
    },
    {
        "text": "🍍数据库",
        "icon": "iconfont icon-shujuku",
        "link": "/数据库/MongoDB/0_MongoDB简介"
    },
    {
        "text": "🍌Redis专栏",
        "icon": "iconfont icon-redis",
        "link": "/Redis/Redis基础/1_Redis缓存三大问题"
    },
    {
        "text": "🍑常用框架",
        "icon": "iconfont icon-zuzhijiagou",
        "items": [
            {
                "text": "工作流引擎Activiti7",
                "icon": "iconfont icon-iconfontmoshi",
                "link": "/常用框架/Activiti7/Activiti整合Spring"
            },
            {
                "text": "缓存框架Caffeine",
                "icon": "iconfont icon-iconfontmoshi",
                "link": "/常用框架/Caffeine/0_Caffeine基本概念"
            },
            {
                "text": "验证码EasyCaptcha",
                "icon": "iconfont icon-iconfontmoshi",
                "link": "/常用框架/EasyCaptcha/0_使用EasyCaptcha生成验证码"
            },
            {
                "text": "表格工具EasyExcel",
                "icon": "iconfont icon-iconfontmoshi",
                "link": "/常用框架/EasyExcel/0_EasyExcel概述"
            },
            {
                "text": "搜索引擎ElasticSearch",
                "icon": "iconfont icon-iconfontmoshi",
                "link": "/Java/架构设计/分布式/分布式搜索/分布式搜索引擎Elasticsearch01"
            },
            {
                "text": "三剑客Mybatis",
                "icon": "iconfont icon-iconfontmoshi",
                "link": "/常用框架/Mybatis/Mybatis-Plus-Join连表查询"
            },
            {
                "text": "分库分表ShardingJdbc",
                "icon": "iconfont icon-iconfontmoshi",
                "link": "/常用框架/ShardingJdbc/0_ShardingJdbc的概述"
            },
            {
                "text": "三剑客Spring",
                "icon": "iconfont icon-iconfontmoshi",
                "link": "/常用框架/Spring/1_Spring容器初始化源码解析"
            },
            {
                "text": "三剑客SpringBoot",
                "icon": "iconfont icon-iconfontmoshi",
                "link": "/常用框架/SpringBoot/SpringBoot程序开发/0_SpringBoot编程起步"
            },
            {
                "text": "AI框架Spring AI",
                "icon": "iconfont icon-iconfontmoshi",
                "link": "/常用框架/SpringAI/SpringAI"
            },
            {
                "text": "监控工具SpringBootAdmin",
                "icon": "iconfont icon-iconfontmoshi",
                "link": "/Java/架构设计/分布式/分布式监控/SpringBootAdmin"
            },
            {
                "text": "任务调度XXL-JOB",
                "icon": "iconfont icon-iconfontmoshi",
                "link": "/常用框架/XXL-JOB/0_分布式任务调度框架概述"
            },
            {
                "text": "模板引擎Thymeleaf",
                "icon": "iconfont icon-iconfontmoshi",
                "link": "/常用框架/Thymeleaf/1_基本语法"
            },
            {
                "text": "重试框架Retry",
                "icon": "iconfont icon-iconfontmoshi",
                "link": "/常用框架/重试框架/1_Spring-Retry"
            },
        ]
    },
    {
        "text": "💻Linux",
        "icon": "iconfont icon-centos",
        "link": "/Linux/Shell命令/0_Linux常用命令"
    },
    {
        "text": "🖼Stable Diffusion",
        "icon": "iconfont icon-a-stablediffusion",
        "link": "/StableDiffusion/StableDiffusion/0_StableDiffusion介绍"
    },
    {
        "text": "🍓随笔文档",
        "icon": "iconfont icon-biji",
        "items": [
            {
                "text": "博客笔记",
                "items": [
                    {"text": "🚀VuePress", "link": "/daily/博客文档/VitPress/0_Vitpress博客搭建"},
                    {"text": "🚀VitPress", "link": "/daily/博客文档/VitPress/0_Vitpress博客搭建"},
                    {"text": "🚀其他", "link": "/daily/博客文档/Github_Pages加速"},
                ]
            },
            {
                "text": "日常笔记",
                "items": [
                    {"text": "🚀日常笔记", "link": "/daily/日常笔记/IDEA+Linux远程开发"},
                    {"text": "🚀开发文档", "link": "/daily/开发文档/PDF转换"},
                    {"text": "🚀开源项目", "link": "/daily/开源项目/0_开源项目"},
                    {"text": "🚀软考中级", "link": "/daily/软考中级软件设计师学习笔记/01_计算机组成与体系结构"},
                    {"text": "🚀面试专栏", "link": "/daily/面试专栏/面试专栏"},
                    {"text": "🚀高等数学", "link": "/daily/高等数学/1_高等数学预备知识"}
                ]
            },
        ]
    },
]
