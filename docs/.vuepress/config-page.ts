/*
 * @Descripttion: 
 * @Author: cy
 * @Date: 2022-05-09 20:59:45
 * @LastEditors: cy
 * @LastEditTime: 2022-06-19 01:28:56
 */
import { defineUserConfig } from 'vuepress'
import userConfig from './config'
import { webpackBundler } from "@vuepress/bundler-webpack"

export default defineUserConfig(Object.assign({}, userConfig, {
    bundler: webpackBundler({
        configureWebpack: (config) => {
            return {
                output: {
                    publicPath: "//learning-notes.oss-cn-chengdu.aliyuncs.com/"
                }
            }
        }
    }),
    base: '/learning-notes/'
}))
