# nuxt3 使用心得

## 快速创建应用

### 1. 初始化项目

```bash
npx nuxi@latest init demo-nuxt3

# 安装依赖
cd demo-nuxt3
yarn

# 这时就启动项目了
yarn dev
```

### 2. 安装常用模块

优化图片加载，可以解决很多图片加载问题

```bash
yarn add @nuxt/image @vueuse/nuxt @nuxtjs/tailwindcss @pinia/nuxt sass
```

在 nuxt.config.ts 中添加配置

```js
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "@pinia/nuxt"],
})
```

### 3. 配置页面

创建 layouts/default.vue

```vue
<template>
    <div class="layout-default">
        <slot />
    </div>
</template>
```

创建 pages/index.vue

```vue
<script setup lang="ts" name="index"></script>

<template>
    <div class="mt-10 text-red-500">index page</div>
</template>
```

修改 app.vue

```vue
<template>
    <NuxtLayout>
        <NuxtLoadingIndicator />
        <NuxtPage />
    </NuxtLayout>
</template>
```

### 4. 组件

components 目录下的组件会自动注册，创建 components/i-button.vue

```vue
<template>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <slot />
    </button>
</template>
```

在页面中直接使用组件即可

```vue
<i-button>ok</i-button>
```

### 5. composables

composables 目录下的文件会自动注册，创建 composables/useCount.ts

```ts
export const useCount = () => {
    // useState 创建的是一个有状态的 ref，类似 pinia
    const count = useState("counter", () => 0)
    const increment = () => {
        count.value++
    }
    return { count, increment }
}
```

在页面中使用, 创建 pages/count.vue

```vue
<script setup lang="ts" name="index">
const { count, increment } = useCount()
</script>

<template>
    <div class="mt-10 text-red-500">
        {{ count }}
    </div>
    <i-button @click="increment">ok</i-button>
</template>
```

### 6. middleware

创建 middleware/auth.ts

```ts
export default defineNuxtRouteMiddleware((to, from) => {
    if (to.params.id === "1") {
        return abortNavigation()
    }

    if (to.path !== "/") {
        return navigateTo("/")
    }
})
```

### 7. server 端

1. 创建 server/api/hello.ts

```ts
export default defineEventHandler((event) => {
    const config = useRuntimeConfig()
    return {
        cookies: parseCookies(event),
        params: getQuery(event),
        api: config.public.api_url,
    }
})
```

然后访问 <http://localhost:3000/api/hello> 即可看到返回的数据

2. 服务端的中间件，可以在 server/middleware 目录下创建，比如 server/middleware/auth.ts

```ts
export default defineEventHandler((event) => {
    event.context.auth = { user: 123 }
})
```

### 环境变量

在项目根目录下创建 .env 文件

```bash
API_URL=http://www.example.com
```

然后在 nuxt.config.ts 中使用

```ts
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            api_url: process.env.API_URL,
        },
    },
})
```

## 部署

### 1. 使用 pm2 直接部署

创建 pm2.json 文件

```json
{
    "name": "demo-nuxt3",
    // 或者用命令 node .output/server/index.mjs 启动
    "script": "npm run start", // start 命令在 package.json 中配置 nuxt start
    "instances": "2",
    "env": {
        "NODE_ENV": "production"
    },
    "env_production": {
        "NODE_ENV": "production"
    }
}
```

```bash
yarn add pm2 -g
# 启动
pm2 start pm2.json
```

### 2. 在 docker 中使用 pm2 部署

1. 创建 Dockerfile

```dockerfile
FROM node:18-alpine3.16

WORKDIR /app

# 缓存依赖包，提高构建速度
COPY package.json ./package.json

# 设置npm镜像
RUN yarn config set registry https://registry.npm.taobao.org

# 强制拉取依赖
# RUN npm install --force
RUN yarn install --ignore-dependencies @nuxt/devtools

COPY . /app

RUN yarn build

# 安装 pm2
RUN yarn global add pm2

# 开始运行
CMD ["pm2-runtime", "start", "pm2.json"]

EXPOSE 3000
```

2. 创建 docker-compose.yml

```yml
version: "3.5"

services:
    ### Web ################################################
    web:
        build:
            context: .
        ports:
            - "3000:3000"
```

3. 使用 docker-compose 启动

```bash
docker-compose up -d web
```
