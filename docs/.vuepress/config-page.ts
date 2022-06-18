/*
 * @Descripttion: 
 * @Author: cy
 * @Date: 2022-05-09 20:59:45
 * @LastEditors: cy
 * @LastEditTime: 2022-06-18 22:35:15
 */
import { defineUserConfig } from 'vuepress'
import userConfig from './config'

export default defineUserConfig(Object.assign({}, userConfig, {
    bundler: undefined,
    base: '/learning-notes/'
}))
