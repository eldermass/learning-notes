# socket IO

## 使用

### html 中使用

```js
let socket = io()
function subFn() {
    socket.emit('chat message', '你好呀')
    return false
}
```

### express 中的使用

```js
const app = require('express')()
const http = require('http').Server(app)
const IO = require('socket.io')(http)
/**
 * socket服务器三步曲
 * 1. 创建框架app
 * 2. 原生http中使用框架
 * 3. 用socket.io监听原生http
 * 注： 本node服务应该由监听原生http进行
 *      而不是app
 *  */
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

http.listen(8000, () => {
    console.log(`server is listen in port 8000`)
})

IO.on('connection', (socket) => {
    console.log('a user in')
    socket.on('disconnect', function () {
        console.log('user disconnected')
    })
    socket.on('chat message', (msg) => {
        console.log('收到' + msg)
    })
})
```

### koa 中使用

```js
const Koa = require('koa')
let app = new Koa()
const Router = require('koa-router')
const fs = require('fs')
const http = require('http').createServer(app.callback())
const IO = require('socket.io')(http)
/**
 * socket服务器三步曲
 * 1. 创建框架app
 * 2. 原生http中使用框架
 * 3. 用socket.io监听原生http
 * 注： 本node服务应该由监听原生http进行
 *      而不是app
 *  */
// 首页路由
let router = new Router()

router.get('/', (ctx) => {
    ctx.response.type = 'html'
    ctx.response.body = fs.createReadStream(__dirname + '/index.html')
})

app.use(router.routes())

IO.on('connection', (socket) => {
    console.log('a user in')
    socket.on('disconnect', function () {
        console.log('user disconnected')
    })
    socket.on('chat message', (msg) => {
        console.log('收到' + msg)
    })
})

// 注意 这里是http
http.listen(8000, () => {
    console.log('server is listen in port 8000')
})
```
