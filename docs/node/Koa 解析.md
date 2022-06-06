# Koa 解析

## 一、封装 http

用 callback 将函数先储存起来，然后再启动的时候执行

```js
const http = require('http')

class Application {
    constructor() {
        this.callback = () => {}
    }
    use(callback) {
        this.callback = callback
    }
    listen(...args) {
        let server = http.createServer((req, res) => {
            this.callback(req, res)
        })
        server.listen(...args)
    }
}

// 使用
let ser = new Application()
ser.use((req, res) => {
    res.end('hello')
})

ser.listen(8080, () => {
    console.log('server listen in 8080')
})
```

## 挂载 ctx

### setter 与 getter

通过 setter 和 getter 实现数据的响应式和代理

```js

```

### 挂载 context

```js
const http = require('http')
// 利用set get 响应式和代理
let request = {
    get url() {
        return this.req.url
    },
}
let response = {
    get body() {
        return this._body
    },
    set body(val) {
        this._body = val
    },
}
// 挂载到 context上
let context = {
    get url() {
        return this.request.url
    },
    get body() {
        return this.response.body
    },
    set body(val) {
        this.response.body = val
    },
}

class Application {
    constructor() {
        this.context = context
        this.response = response
        this.request = request
        this.callback = () => {}
    }
    use(callback) {
        this.callback = callback
    }
    listen(...args) {
        let server = http.createServer(async (req, res) => {
            //构造ctx
            let ctx = this.createCtx(req, res)
            await this.callback(ctx)
            ctx.res.end(ctx.body)
        })
        server.listen(...args)
    }
    createCtx(req, res) {
        //挂载操作
        let ctx = Object.create(this.context)
        ctx.request = Object.create(this.request)
        ctx.response = Object.create(this.response)
        ctx.req = ctx.request.req = req
        ctx.res = ctx.response.res = res
        return ctx
    }
}

//使用
let ser = new Application()
ser.use(async (ctx) => {
    ctx.body = 'hello ' + ctx.url
})

ser.listen(8080, () => {
    console.log('server listen in 8080')
})
```

## 洋葱圈

这概念始发于 koa，现在常用于后端的中间件流程控制，

### 洋葱圈模型

```js
function add(x, y) {
    return x + y
}
function double(n) {
    return 2 * n
}
// 傻逼做法
// let res1 = add(1, 2)
// let res2 = double(res1)
// console.log(res2)

// 洋葱圈原理
const middlewares = [add, double] //储存所有的中间件
let len = middlewares.length

//把传入的中间件，封装为一个整体函数
function compose(midds) {
    return (...args) => {
        let res = midds[0](...args) //执行第一个中间件
        for (let i = 1; i < len; i++) {
            //把之前的结果一次保存到后面执行
            res = midds[i](res)
        }
        return res
    }
}
//使用
let fn = compose(middlewares)
let res = fn(1, 2)
console.log(res)
```

### 添加洋葱、异步

```js
async function fn1(next) {
    console.log('fn1')
    await next()
    console.log('fn1 end')
}

async function fn2(next) {
    console.log('fn2')
    await delay()
    await next()
    console.log('fn2 end')
}
function fn3() {
    console.log('fn3')
}

//测试延时
function delay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('yes')
        }, 2000)
    })
}
// 依次执行3个函数，实现洋葱模型
// 异步compose 的实现

function compose(middlewares) {
    return function () {
        return dispatch(0) // 控制分发，是否继续执行

        function dispatch(i) {
            let fn = middlewares[i] // 当前的中间件函数
            if (!fn) {
                return Promise.resolve() // 当前中间件不存在，就返回
            }
            //next 执行时  里面包装的next函数 , fn(next)
            return Promise.resolve(
                fn(function next() {
                    return dispatch(i + 1)
                    // 当next被调用时，执行下一个中间件
                    // 此时i被闭包
                })
            )
        }
    }
}

let midds = [fn1, fn2, fn3]
let finaFn = compose(midds)
finaFn()
```

## 模拟实现

```js
const http = require('http')
//利用set get 响应式操作
let request = {
    get url() {
        return this.req.url
    },
}
let response = {
    get body() {
        return this._body
    },
    set body(val) {
        this._body = val
    },
}
//挂载到 context上
let context = {
    get url() {
        return this.request.url
    },
    get body() {
        return this.response.body
    },
    set body(val) {
        this.response.body = val
    },
}

class Application {
    constructor() {
        this.context = context
        this.response = response
        this.request = request
        this.midddlwares = []
    }
    use(callback) {
        // this.callback = callback
        this.midddlwares.push(callback)
    }
    listen(...args) {
        let server = http.createServer(async (req, res) => {
            //构造ctx
            let ctx = this.createCtx(req, res)
            // 整合中间件
            let fn = this.compose(this.midddlwares)
            await fn(ctx)
            ctx.res.end(ctx.body)
        })
        server.listen(...args)
    }
    createCtx(req, res) {
        //挂载操作
        let ctx = Object.create(this.context)
        ctx.request = Object.create(this.request)
        ctx.response = Object.create(this.response)
        ctx.req = ctx.request.req = req
        ctx.res = ctx.response.res = res
        return ctx
    }
    compose(midddlware) {
        return function (context) {
            return dispatch(0)
            function dispatch(i) {
                let fn = midddlware[i]
                if (!fn) {
                    return Promise.resolve()
                }
                //每个中间件给两个参数  ctx 和 next
                return Promise.resolve(
                    fn(context, function next() {
                        return dispatch(i + 1)
                    })
                )
            }
        }
    }
}

//使用
let ser = new Application()
ser.use(async (ctx, next) => {
    ctx.body = '1'
    await next()
    ctx.body += '1 end'
})

ser.use(async (ctx, next) => {
    ctx.body += '2'
    let res = await delay()
    ctx.body += ` - ${res} -`
    ctx.body += '2 end'
})

ser.listen(8080, () => {
    console.log('server listen in 8080')
})
function delay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('yes')
        }, 2000)
    })
}
```
