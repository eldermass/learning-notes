/*
 * @Descripttion: 
 * @Author: cy
 * @Date: 2022-05-09 20:59:45
 * @LastEditors: cy
 * @LastEditTime: 2022-06-18 22:57:38
 */
import { defineUserConfig } from 'vuepress'
import userConfig from './config'
import { webpackBundler } from "@vuepress/bundler-webpack"

export default defineUserConfig(Object.assign({}, userConfig, {
    base: '/learning-notes/'
}))
