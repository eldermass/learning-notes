---
home: true
heroText: 组件文档
tagline: 通用组件库的文档及示例
heroImage: /home.jpg   # 注意这里可以使外链，也可以是静态资源
actions: [
  { text: 在线地址, link: https://notes.1000melody.com/, type: primary },
  { text: 进入查看, link: /工具/Git常用命令.html, type: default }
]

footer: Hello CXY
---

```vue
<script setup>
import { ref } from "vue";

const msg = ref("Hello World!");
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
</template>
```

<!-- ::: vue-demo 代码演示

```vue
<template>
  <div class="box">
    <code>这是一段越点越多的</code>
    <span @click="handler">{{ message }}</span>!
  </div>
</template>
<script>
const { ref } = Vue;

export default {
  setup() {
    const message = ref("代码示例");

    const handler = () => {
      message.value = "代码示例" + message.value;
    };

    return {
      message,
      handler,
    };
  },
};
</script>
<style>
.box span {
  color: red;
  cursor: pointer;
  user-select: none;
}
</style>
```

:::

::: vue-playground 交互演示
@file App.vue

```vue
<script setup>
import { ref } from "vue";

const msg = ref("你改变了我，就能改变结果!");
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
</template>
```

@import

```json
"imports": {
    "vue3": "//cdn.jsdelivr.net/npm/vue@3",
    "element-plus": "//cdn.jsdelivr.net/npm/element-plus",
    "elementPlusStyle": "//cdn.jsdelivr.net/npm/element-plus/dist/index.css"
  }
```

@setting

```json
{
  "showCompileOutput": true
}
```

::: -->
