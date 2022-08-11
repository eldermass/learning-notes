/*
 * @Descripttion: 
 * @Author: cy
 * @Date: 2022-08-11 09:54:30
 * @LastEditors: cy
 * @LastEditTime: 2022-08-11 10:08:50
 */
import { defineUserConfig } from 'vuepress'
import userConfig from './config'

export default defineUserConfig(Object.assign({}, userConfig, {
    base: '/learning-notes/',
}))