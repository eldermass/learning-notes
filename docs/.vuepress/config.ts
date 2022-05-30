import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
    head: [['link', { rel: 'icon', href: '/images/eight.png' }]],
    lang: 'zh-CN',
    title: 'Morning',
    description: '学习技术时瞎记的笔记',
    theme: defaultTheme({
        logo: '/images/eight.png', // 注意图片放在 public 文件夹下
        navbar: [
            {
                // 右上导航航条 docs/.vuepress/README.md
                text: '概述',
                link: '/',
            },
            {
                text: 'Vue 学习笔记',
                children: [
                    { text: '笔记', link: '/guide/vue/test01.md' }, // 可不写后缀 .md
                    { text: '其它链接', link: 'https://www.baidu.com/' }, // 外部链接
                ],
            },
            {
                text: '其它参考',
                children: [
                    { text: 'API', link: 'https://cn.bing.com/' },
                    {
                        text: '学习视频',
                        children: [
                            { text: '慕客', link: 'https://cn.bing.com/' },
                            { text: 'B 站', link: 'https://cn.bing.com/' },
                        ],
                    }
                ],
            },
        ],
        sidebar: [
            {
                collapsible: true,
                text: '工具',
                link: '/工具/Git常用命令.md',
                children: [
                    '/工具/Git常用命令.md',
                    '/工具/Nginx 配置.md',
                    '/工具/docker 命令.md'
                ]
            },
            {
                collapsible: true,
                text: '服务器',
                link: '/服务器/linux 命令.md',
                children: [
                    '/服务器/linux 命令.md',
                    '/服务器/shell编程.md',
                    '/服务器/vim 使用.md',
                    '/服务器/linux安装imagemagick.md'
                ]
            },
            {
                collapsible: true,
                text: 'JavaScript',
                link: '/JavaScript/常用的js函数.md',
                children: [
                    '/JavaScript/常用的js函数.md',
                    '/JavaScript/关于js继承.md',
                    '/JavaScript/模拟bind实现.md',
                    '/JavaScript/深浅拷贝.md',
                    '/JavaScript/文件路劲映射.md',
                    '/JavaScript/canvas验证码.md',
                    '/JavaScript/ES6里MapSet数据结构.md',
                    '/JavaScript/ES6中的类.md',
                    '/JavaScript/ES6中的正则表达式.md',
                    '/JavaScript/es6中关于数组的部分函数.md',
                    '/JavaScript/ES6中异步处理方法.md',
                    '/JavaScript/proxy.md',
                    '/JavaScript/工厂模式.md',
                    '/JavaScript/观察者模式.md',
                    '/JavaScript/订阅模式.md',
                    '/JavaScript/正则表达式.md',
                ]
            },
            {
                collapsible: true,
                text: '协议',
                link: '/协议/OAUTH2.md',
                children: [
                    '/协议/OAUTH2.md'
                ],
            },
            {
                collapsible: true,
                text: '规范',
                link: '/规范/RESTFULAPI.md',
                children: [
                    '/规范/RESTFULAPI.md',
                    '/规范/PromiseA+.md'
                ]
            },
            {
                collapsible: true,
                text: '计算机基础',
                link: '/计算机基础/位运算.md',
                children: [
                    '/计算机基础/位运算.md',
                    '/计算机基础/base64原理.md',
                    '/计算机基础/internet五层协议.md'
                ]
            },
            {
                collapsible: true,
                text: '机器学习',
                link: '/机器学习/人工智障.md',
                children: [
                    '/机器学习/人工智障.md',
                ]
            }
        ],
    }),
})
