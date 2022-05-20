const http = require('http')
//利用set get 响应式操作
let request = {
    get url(){
        return this.req.url
    }
}
let response = {
    get body(){
        return this._body
    },
    set body(val){
        this._body = val
    }
}
//挂载到 context上
let context = {
    get url(){
        return this.request.url
    },
    get body(){
        return this.response.body
    },
    set body(val){
        this.response.body = val
    }
}

class Application{
    constructor(){
        this.context = context
        this.response = response
        this.request = request
        this.callback = ()=>{}
    }
    use(callback){
        this.callback = callback
    }
    listen(...args){
        let server = http.createServer(async (req, res) => {
            //构造ctx
            let ctx  = this.createCtx(req, res)
            await this.callback(ctx)
            ctx.res.end(ctx.body)
        })
        server.listen(...args)
    }
    createCtx(req, res){
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



ser.listen(8080,()=>{
    console.log('server listen in 8080')
})