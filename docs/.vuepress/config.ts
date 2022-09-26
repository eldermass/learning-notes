import { defineUserConfig, defaultTheme } from 'vuepress'
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics"
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
    head: [['link', { rel: 'icon', href: '/images/1.png' }]],
    lang: 'zh-CN',
    title: 'Morning',
    description: '学习技术时瞎记的笔记',
    plugins: [
        googleAnalyticsPlugin({ id: 'G-JML3S15FQR' }),
        docsearchPlugin({
            appId: 'XRAU5F9J7U',
            apiKey: '8d69aae991923a7a7624d7f7a341e9e3',
            indexName: 'learning_note'
        })
    ],
    theme: defaultTheme({
        logo: '/images/1.png', // 注意图片放在 public 文件夹下
        navbar: [
            {
                // 右上导航航条 docs/.vuepress/README.md
                text: '概述',
                link: '/',
            },
            {
                text: '学习网站',
                children: [
                    { text: 'Github', link: 'https://github.com' },
                    { text: '掘金', link: 'https://juejin.cn/' }, 
                    { text: '前端部署', link: 'https://q.shanyue.tech/deploy/'},
                    { text: 'MDN', link: 'https://developer.mozilla.org/zh-CN/docs/Web'},
                    { text: 'learnku', link: 'https://learnku.com/'}
                ],
            },
            {
                text: '工具',
                children: [
                    {
                        text: '菜鸟工具',
                        link: 'https://c.runoob.com/'
                    }
                ]
            },
            // {
            //     text: '其它参考',
            //     children: [
            //         { text: 'API', link: 'https://cn.bing.com/' },
            //         {
            //             text: '学习视频',
            //             children: [
            //                 { text: '慕客', link: 'https://cn.bing.com/' },
            //                 { text: 'B 站', link: 'https://cn.bing.com/' },
            //             ],
            //         }
            //     ],
            // },
        ],
        sidebar: [
            {
                collapsible: true,
                text: '工具',
                link: '/工具/Git常用命令.md',
                children: [
                    '/工具/Git常用命令.md',
                    '/工具/Nginx 配置.md',
                    '/工具/docker 命令.md',
                    '/工具/npx用途.md',
                ]
            },
            {
                collapsible: true,
                text: '服务器',
                link: '/服务器/linux 命令.md',
                children: [
                    '/服务器/linux 命令.md',
                    '/服务器/linux 实践.md',
                    '/服务器/shell编程.md',
                    '/服务器/vim 使用.md',
                    '/服务器/linux安装imagemagick.md',
                    '/服务器/windows中安装open-ssh.md',
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
                    '/规范/PromiseA+.md',
                    '/规范/前端项目强制规范.md'
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
                text: 'Node',
                link: '/node/Koa 解析.md',
                children: [
                    '/node/Koa 解析.md',
                    '/node/socket.md',
                    '/node/文件操作.md',
                    '/node/可执行命令.md'
                ]
            },
            {
                collapsible: true,
                text: 'PHP',
                link: '/php/laravel入门.md',
                children: [
                    '/php/laravel入门.md',
                    '/php/laravel续.md'
                ]
            },
            {
                collapsible: true,
                text: 'Python',
                link: '/python/python基础.md',
                children: [
                    '/python/python基础.md',
                    '/python/python入门.md',
                    '/python/python爬虫.md',
                    '/python/Flask入门.md',
                    '/python/Masonite入门.md',
                ]
            },
            {
                collapsible: true,
                text: 'Golang',
                link: '/go/golang基础.md',
                children: [
                    '/go/golang基础.md',
                    '/go/区块链与go.md',
                    '/go/beego.md',
                    '/go/gin.md'
                ]
            },
            {
                collapsible: true,
                text: '数据库',
                link: '/数据库/redis入门.md',
                children: [
                    '/数据库/redis入门.md',
                    '/数据库/mysql入门.md',
                    '/数据库/mongoDB入门.md'
                ]
            },
            {
                collapsible: true,
                text: '其他',
                link: '/其他/gojs 去水印.md',
                children: [
                    '/其他/gojs 去水印.md'
                ]
            }
        ],
    }),
})
