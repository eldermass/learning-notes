# PM2

## 基础使用

1. 使用 docker 镜像

::: code-tabs#shell

@tab server.js

```js
const http = require("http") // 加载 HTTP 模块

const server = http.createServer((req, res) => {
    // 处理请求的回调函数
    res.writeHead(200, { "Content-Type": "text/html" }) // 设置响应头
    res.write("<h1>Hello, World!</h1>") // 设置响应体
    res.end() // 结束响应
})

server.listen(8080) // 监听端口
console.log("Server running at http://localhost:8080/")
```

@tab ecosystem.config.js

```js
module.exports = {
    apps: [
        {
            name: "test",
            script: "./server.js",
        },
    ],
}
```

@tab Dockerfile

```dockerfile
FROM treehouses/pm2:latest

WORKDIR /app

COPY . /app

EXPOSE 8080

# 如果报错 [pm2-runtime not found 应该是换行符的问题
CMD ["pm2-runtime", "start", "/app/ecosystem.config.js"]
```

@tab:active docker-compose.yml

```yml
version: "3.5"

services:
    ### Node ################################################
    node:
        build:
            context: .
        ports:
            - "8080:8080"
```

:::
