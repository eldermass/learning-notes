import{_ as n,Y as e,Z as s,a0 as a}from"./framework-6d304b95.js";const i={},d=a(`<h1 id="npm-一些工具和使用的小知识" tabindex="-1"><a class="header-anchor" href="#npm-一些工具和使用的小知识" aria-hidden="true">#</a> npm 一些工具和使用的小知识</h1><h2 id="dependencies-和-devdependencies-的区别" tabindex="-1"><a class="header-anchor" href="#dependencies-和-devdependencies-的区别" aria-hidden="true">#</a> dependencies 和 devDependencies 的区别</h2><p>在下载包的时候，npm install vue 只会把 vue 下 dependencies 的模块 但对于项目而言，npm install， 会下载 dependencies 和 devDependencies 的所有模块</p><h2 id="glob-通配符" tabindex="-1"><a class="header-anchor" href="#glob-通配符" aria-hidden="true">#</a> glob 通配符</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在 tsconfig.json 里使用的通配符</span>
* 匹配0或多个字符（不包括目录分隔符）
? 匹配一个任意字符（不包括目录分隔符）
**/ 递归匹配任意子目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在 gitignore 里使用的通配符</span>
<span class="token string">&#39;#&#39;</span>     表示注释，使用<span class="token string">&#39;\\&#39;</span>转义

<span class="token string">&#39;!&#39;</span>     表示否定，前面忽略的文件/目录将会被重新包含。如果父级目录被忽略，则子文件不能被再次包含。

<span class="token string">&#39;/&#39;</span>     如果结尾有/，则表示只匹配目录。比如，a/表示a是目录。
        如果不包含/，则会全局匹配。比如a，匹配任何目录下的a。
        如果开头有/，则表示匹配根目录。比如，/a表示根目录下的a

<span class="token string">&#39;*&#39;</span>     通配符*不能跨目录。
<span class="token string">&#39;**&#39;</span>    如 **/a，表示任何目录下的a。
        如 abc/**，递归匹配abc下的所有文件和目录。
        如 a/**/b，其中的**表示0到多层目录。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nodemon" tabindex="-1"><a class="header-anchor" href="#nodemon" aria-hidden="true">#</a> nodemon</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// --watch 监听文件 -e 拓展名  -exec 需要执行的命令</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;watch&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nodemon  --watch ./ts/**/* -e  ts,tsx  --exec tsc&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nodemon --watch ./ts/**/* -e ts,tex  --exec ts-node ts/index.ts&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),t=[d];function c(l,o){return e(),s("div",null,t)}const p=n(i,[["render",c],["__file","npm小知识.html.vue"]]);export{p as default};
