import { defineUserConfig } from 'vuepress'
import userConfig from './config'

export default defineUserConfig(Object.assign({}, userConfig, {
    base: '/learning-notes/'
}))