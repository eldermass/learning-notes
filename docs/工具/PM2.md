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

@tab pm2.json

```js
{
  "name": "test-pm2",
  "script": "server.js",
  "instances": "2",
  "env": {
    "NODE_ENV": "development"
  },
  "env_production" : {
    "NODE_ENV": "production"
  }
}
```

@tab Dockerfile

```dockerfile
FROM keymetrics/pm2:latest-alpine

WORKDIR /app

COPY . /app

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production

# Show current folder structure in logs
RUN ls -al -R

EXPOSE 8080

# 如果报错 [pm2-runtime not found 应该是换行符的问题
CMD [ "pm2-runtime", "start", "pm2.json" ]
```

@tab:active docker-compose.yml

```yml
version: "3.5"

services:
    ### Node ################################################
    pm2:
        build:
            context: .
        ports:
            - "8080:8080"
```

:::

2. 使用 pm2 命令

```bash
# Monitoring CPU/Usage of each process
docker exec -it <container-id> pm2 monit
# Listing managed processes
docker exec -it <container-id> pm2 list
# Get more information about a process
docker exec -it <container-id> pm2 show
# 0sec downtime reload all applications
docker exec -it <container-id> pm2 reload all
```
