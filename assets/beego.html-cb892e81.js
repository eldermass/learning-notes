import{_ as e,Y as n,Z as s,a0 as a}from"./framework-6d304b95.js";const i={},l=a(`<h1 id="beego" tabindex="-1"><a class="header-anchor" href="#beego" aria-hidden="true">#</a> beego</h1><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装 bee 工具，不用 get</span>
go <span class="token function">install</span> github.com/beego/bee/v2@latest

<span class="token comment"># 整理安装项目依赖</span>
go mod tidy

<span class="token comment"># 创建项目， bee api 创建 api应用</span>
bee new hello-bee 

<span class="token comment"># 运行项目</span>
<span class="token builtin class-name">cd</span> hello-bee
bee run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),d=[l];function c(t,o){return n(),s("div",null,d)}const b=e(i,[["render",c],["__file","beego.html.vue"]]);export{b as default};
