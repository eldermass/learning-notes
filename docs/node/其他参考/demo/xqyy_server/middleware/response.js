const tools = require('../tools/tools')
module.exports = async (ctx, next) => {
    try {
        await next()
        ctx.body = ctx.body ? ctx.body : {
            code: ctx.state.code !== undefined ? ctx.state.code : 0,
            data: ctx.state.data !== undefined ? ctx.state.data : {}
        }
    } catch (e) {
        // 设置状态码为 500 - 服务端错误
        // ctx.status = 500
        console.log(e)
        // 输出详细的错误信息
        ctx.body = {
            code: -1,
            error: e && e.message ? e.message : e.toString()
        }
    }
}