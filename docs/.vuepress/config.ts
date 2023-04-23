import { defineUserConfig } from 'vuepress'
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics"
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { hopeTheme } from "vuepress-theme-hope"
import navbar from "./navbar"
import sidebar from './sidebar'

export default defineUserConfig({
    head: [['link', { rel: 'icon', href: '/images/1.png' }]],
    lang: "zh-CN",
    title: '瞎记的笔记',
    description: '学习技术时瞎记的笔记',
    plugins: [
        googleAnalyticsPlugin({ id: 'G-JML3S15FQR' }),
        docsearchPlugin({
            appId: 'XRAU5F9J7U',
            apiKey: '8d69aae991923a7a7624d7f7a341e9e3',
            indexName: 'learning_note'
        })
    ],
    theme: hopeTheme({
        logo: '/images/1.png', // 注意图片放在 public 文件夹下
        navbar,
        sidebar,
        plugins: {
            mdEnhance: {
                vuePlayground: true,
                vPre: true,
                demo: true
            }
        },
        themeColor: {
            blue: "#2196f3",
            red: "#f26d6d",
            green: "#3eaf7c",
            orange: "#fb9b5f",
        },
        fullscreen: true,
    }),
})
