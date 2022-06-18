/*
 * @Descripttion: 
 * @Author: cy
 * @Date: 2022-05-09 20:59:45
 * @LastEditors: cy
 * @LastEditTime: 2022-06-18 22:50:42
 */
import { defineUserConfig } from 'vuepress'
import userConfig from './config'
import { webpackBundler } from "@vuepress/bundler-webpack"

export default defineUserConfig(Object.assign({}, userConfig, {
    bundler: webpackBundler({
        configureWebpack: config => {
            return {
                output: {
                    publicPath: "/learning-notes/"
                }
            }
        }
    }),
    base: '/learning-notes/'
}))
