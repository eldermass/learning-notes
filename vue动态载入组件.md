# 动态载入 vue 组件

```js
export default {
  install: function(Vue) {
    // require.context(a,b,c)  a => 目录  b => 是否有子目录  c => 匹配文件的正则
    const requireComponent = require.context('.', true, /index\.vue$/)

    requireComponent.keys().forEach(fillName => {
      let config = requireComponent(fillName)
      config = config.default || config

      Vue.component(config.name.replace(/-(\w)/img, ($, val) => val.toUpperCase()), config)
    })
  }
}

```
