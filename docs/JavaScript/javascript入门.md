# JavaScript 入门

## 注释

参照 JSDoc 学习 JavaScript 注释规范

### 文件注释

### 函数注释

合理的使用注释能够实现 ts 类似的提示效果

```JavaScript
/**
 * @function 处理xhr请求后的返回值
 * @description 描述
 * @param {{ code: number, data: array<{}> }} res 试试水
 * @param { (data: string) => void } callback 回调函数
 * @param  { string } message 成功消息
 * @return { string[] } 字符串数组
 * @author cxy
 * @version 1.0.0
 * @example
 */
 function handleRes(res, callback, message) {}

```
