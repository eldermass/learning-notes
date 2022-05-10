/*
 * @Descripttion: 
 * @Author: cy
 * @Date: 2022-05-09 20:59:45
 * @LastEditors: cy
 * @LastEditTime: 2022-05-09 21:24:14
 */
import { defineUserConfig } from 'vuepress'
import userConfig from './config'

export default defineUserConfig(Object.assign({}, userConfig, {
    base: '/learning-notes/'
}))
