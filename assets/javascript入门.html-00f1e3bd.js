import{_ as a,Y as e,Z as i,a0 as n}from"./framework-6d304b95.js";const r={},s=n(`<h1 id="javascript-入门" tabindex="-1"><a class="header-anchor" href="#javascript-入门" aria-hidden="true">#</a> JavaScript 入门</h1><h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h2><p>参照 JSDoc 学习 JavaScript 注释规范</p><h3 id="文件注释" tabindex="-1"><a class="header-anchor" href="#文件注释" aria-hidden="true">#</a> 文件注释</h3><h3 id="函数注释" tabindex="-1"><a class="header-anchor" href="#函数注释" aria-hidden="true">#</a> 函数注释</h3><p>合理的使用注释能够实现 ts 类似的提示效果</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>/**
 * @function 处理xhr请求后的返回值
 * @description 描述
 * @param {{ code: number, data: array&lt;{}&gt; }} res 试试水
 * @param { (data: string) =&gt; void } callback 回调函数
 * @param  { string } message 成功消息
 * @return { string[] } 字符串数组
 * @author cxy
 * @version 1.0.0
 * @example
 */
 function handleRes(res, callback, message) {}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),d=[s];function c(t,l){return e(),i("div",null,d)}const h=a(r,[["render",c],["__file","javascript入门.html.vue"]]);export{h as default};
