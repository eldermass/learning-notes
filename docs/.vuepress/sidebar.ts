import { type SidebarOptions } from "vuepress-theme-hope"

export default [
    {
        collapsible: true,
        text: "工具",
        link: "/工具/Git常用命令.md",
        prefix: "/工具/",
        children: ["Git常用命令.md", "Nginx 配置.md", "Nginx 模块.md", "Docker 命令.md", "npx用途.md", "PM2.md"],
    },
    {
        collapsible: true,
        text: "服务器",
        link: "/服务器/linux 基础.md",
        prefix: "/服务器/",
        children: [
            "linux 基础.md",
            "linux 实践.md",
            "shell编程.md",
            "vim 使用.md",
            "linux安装imagemagick.md",
            "windows中安装open-ssh.md",
        ],
    },
    {
        collapsible: true,
        text: "协议",
        link: "/协议/OAUTH2.md",
        prefix: "/协议/",
        children: ["OAUTH2.md"],
    },
    {
        collapsible: true,
        text: "规范",
        link: "/规范/RESTFULAPI.md",
        prefix: "/规范/",
        children: ["RESTFULAPI.md", "PromiseA+.md", "前端项目强制规范.md"],
    },
    {
        collapsible: true,
        text: "计算机基础",
        link: "/计算机基础/位运算.md",
        prefix: "/计算机基础/",
        children: ["位运算.md", "base64原理.md", "internet五层协议.md"],
    },
    {
        collapsible: true,
        text: "机器学习",
        link: "/机器学习/人工智障.md",
        prefix: "/机器学习/",
        children: ["人工智障.md"],
    },
    {
        collapsible: true,
        text: "JavaScript",
        link: "/JavaScript/常用的js函数.md",
        prefix: "/JavaScript/",
        children: [
            "常用的js函数.md",
            "关于js继承.md",
            "模拟bind实现.md",
            "深浅拷贝.md",
            "文件路劲映射.md",
            "canvas验证码.md",
            "ES6里MapSet数据结构.md",
            "ES6中的类.md",
            "ES6中的正则表达式.md",
            "es6中关于数组的部分函数.md",
            "ES6中异步处理方法.md",
            "proxy.md",
            "工厂模式.md",
            "观察者模式.md",
            "订阅模式.md",
            "正则表达式.md",
        ],
    },
    {
        collapsible: true,
        text: "Node",
        link: "/node/Koa 解析.md",
        prefix: "/node/",
        children: ["Koa 解析.md", "socket.md", "文件操作.md", "可执行命令.md"],
    },
    {
        collapsible: true,
        text: "PHP",
        link: "/php/laravel入门.md",
        prefix: "/php/",
        children: ["laravel入门.md", "laravel续.md"],
    },
    {
        collapsible: true,
        text: "Python",
        link: "/python/python基础.md",
        prefix: "/python/",
        children: [
            "python基础.md",
            "python入门.md",
            "python爬虫.md",
            "Flask入门.md",
            "Masonite入门.md",
            "Django入门.md",
        ],
    },
    {
        collapsible: true,
        text: "Golang",
        link: "/go/golang基础.md",
        prefix: "/go/",
        children: ["golang基础.md", "区块链与go.md", "beego.md", "gin.md"],
    },
    {
        collapsible: true,
        text: "数据库",
        link: "/数据库/redis入门.md",
        prefix: "/数据库/",
        children: ["redis入门.md", "mysql入门.md", "mongoDB入门.md"],
    },
    {
        collapsible: true,
        text: "其他",
        link: "/其他/gojs 去水印.md",
        prefix: "/其他/",
        children: ["gojs 去水印.md"],
    },
] as SidebarOptions
