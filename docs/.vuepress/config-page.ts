/*
 * @Descripttion: 
 * @Author: cy
 * @Date: 2022-05-09 20:59:45
 * @LastEditors: cy
 * @LastEditTime: 2022-05-09 21:24:14
 */
import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
    head: [['link', { rel: 'icon', href: '/images/eight.png' }]],
    base: '/learning-notes/',
    lang: 'zh-CN',
    title: 'Morning',
    description: '这是我的第一个 VuePress 站点',
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
                text: 'Typescript 学习笔记',
                children: [
                    { text: '笔记', link: '/guide/ts/' }, // 以 ‘/’结束，默认读取 README.md
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
                    },
                    {
                        text: '开源项目',
                        children: [
                            { text: '项目 01', link: 'https://cn.bing.com/' },
                            { text: '项目 02', link: 'https://cn.bing.com/' },
                            { text: '项目 03', link: 'https://cn.bing.com/' },
                            { text: '项目 04', link: 'https://cn.bing.com/' },
                        ],
                    },
                ],
            },
        ],
        sidebar: [
            // SidebarItem
            {
                text: 'Foo',
                link: '/foo/',
                children: [
                    // SidebarItem
                    {
                        text: 'github',
                        link: 'https://github.com',
                        children: [],
                    },
                    // 字符串 - 页面文件路径
                    '/foo/bar.md',
                ],
            },
            // 字符串 - 页面文件路径
            '/bar/README.md',
        ],
    }),
})
