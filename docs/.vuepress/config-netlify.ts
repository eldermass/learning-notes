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
    })
}))
