import{_ as s,Y as a,Z as t,$ as e,a1 as n,a2 as p,a0 as o}from"./framework-6d304b95.js";const l={},i=n("h1",{id:"开发-node-可执行命令",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#开发-node-可执行命令","aria-hidden":"true"},"#"),p(" 开发 node 可执行命令")],-1),c=o(`<h2 id="目标" tabindex="-1"><a class="header-anchor" href="#目标" aria-hidden="true">#</a> 目标</h2><ol><li>使用 rollup + ts 搭建开发环境</li><li>能够像 vue-cli 一样在命令行中使用</li></ol><h2 id="一-创建结构" tabindex="-1"><a class="header-anchor" href="#一-创建结构" aria-hidden="true">#</a> 一.创建结构</h2><ol><li>创建一个名为 <code>demo</code> 的目录结构</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> demo
<span class="token builtin class-name">cd</span> demo
<span class="token function">touch</span> index.ts
<span class="token function">npm</span> init <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>在 index.ts 中输入</li></ol><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> text<span class="token operator">:</span> <span class="token builtin">string</span>
text <span class="token operator">=</span> <span class="token string">&#39;1&#39;</span>
text <span class="token operator">=</span> <span class="token string">&#39;ok&#39;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">i am execting something ! </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>text<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二-安装ts" tabindex="-1"><a class="header-anchor" href="#二-安装ts" aria-hidden="true">#</a> 二.安装ts</h2><ol><li>安装<code>ts</code>相关依赖</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> typescript tslib <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>快速生成 <code>tsconfig.json</code> 文件</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">node</span> ./node_modules/typescript/bin/tsc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将 <code>tsconfig.json</code> 文件按需要修改，例如：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;$schema&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://json.schemastore.org/tsconfig&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Default&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;composite&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;declaration&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;declarationMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;esModuleInterop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;forceConsistentCasingInFileNames&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;inlineSources&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;isolatedModules&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;moduleResolution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;noUnusedLocals&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;noUnusedParameters&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;preserveWatchOutput&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;skipLibCheck&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;resolveJsonModule&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lib&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;declarationDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lib&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;**/*.ts&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;node_modules&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;lib&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三-初始化-rollup" tabindex="-1"><a class="header-anchor" href="#三-初始化-rollup" aria-hidden="true">#</a> 三.初始化 Rollup</h2><ol><li>安装相关依赖</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> rollup <span class="token parameter variable">-D</span>
<span class="token function">yarn</span> <span class="token function">add</span> @rollup/plugin-typescript <span class="token parameter variable">-D</span>
<span class="token function">yarn</span> <span class="token function">add</span> @rollup/plugin-node-resolve <span class="token parameter variable">-D</span>
<span class="token function">yarn</span> <span class="token function">add</span> @rollup/plugin-commonjs <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>添加配置文件 rollup.config.js</li></ol><p>这里有个小细节，可执行文件需要在第一行添加shebang，但是rollup打包的时候无法识别&quot;#!&quot;,所以就把<code>#!/usr/bin/env node</code>配置到了banner中</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;rollup&quot;</span>
<span class="token keyword">import</span> resolve <span class="token keyword">from</span> <span class="token string">&quot;@rollup/plugin-node-resolve&quot;</span>
<span class="token keyword">import</span> typescript <span class="token keyword">from</span> <span class="token string">&quot;@rollup/plugin-typescript&quot;</span>
<span class="token keyword">import</span> commonjs <span class="token keyword">from</span> <span class="token string">&quot;@rollup/plugin-commonjs&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">&quot;index.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token string">&quot;lib/index.cjs.js&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&quot;cjs&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">banner</span><span class="token operator">:</span> <span class="token string">&quot;#!/usr/bin/env node&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">file</span><span class="token operator">:</span> <span class="token string">&quot;lib/index.esm.js&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">&quot;esm&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">banner</span><span class="token operator">:</span> <span class="token string">&quot;#!/usr/bin/env node&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">commonjs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">typescript</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>修改 <code>package.json</code> 中的 scripts</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;run&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node ./lib/index.cjs.js&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rollup -w -c&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rimraf -rf ./lib &amp;&amp; rollup -c&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;prepublish&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yarn version &amp;&amp; yarn build&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四-发布" tabindex="-1"><a class="header-anchor" href="#四-发布" aria-hidden="true">#</a> 四.发布</h2><ol><li>最后的 package.json 文件</li></ol><p>bin字段中的key就是npm安装后的命令</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;demo&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.1&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;demo&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lib/index.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./lib/index.d.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;exports&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;.&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;import&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./lib/index.esm.js&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;require&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./lin/index.cjs.js&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;bin&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;demo-exec&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./lib/index.cjs.js&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;run&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node ./lib/index.cjs.js&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rollup -w -c&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rimraf -rf ./lib &amp;&amp; rollup -c&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;prepublish&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yarn version &amp;&amp; yarn build&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;lib&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;nodejs&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;tools&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;typescript&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cxy&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;MIT&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;@rollup/plugin-commonjs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^22.0.2&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;@rollup/plugin-node-resolve&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^14.1.0&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;@rollup/plugin-typescript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^8.5.0&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;@typescript-eslint/eslint-plugin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^5.38.0&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;@typescript-eslint/parser&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^5.38.0&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;eslint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^8.23.1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rimraf&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.0.2&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;rollup&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.79.0&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;tslib&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.4.0&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;typescript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.8.3&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>发布</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> prepublish
<span class="token function">npm</span> publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><ol><li>eslint</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> eslint <span class="token parameter variable">-D</span>
./node_modules/.bin/eslint <span class="token parameter variable">--init</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>prettier</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> prettier <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>husky</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> husky@3.1.0 <span class="token parameter variable">-D</span>
<span class="token function">yarn</span> <span class="token function">add</span> lint-staged <span class="token parameter variable">-D</span>
<span class="token function">yarn</span> <span class="token function">add</span> @commitlint/cli <span class="token parameter variable">-D</span>
<span class="token function">yarn</span> <span class="token function">add</span> @commitlint/config-conventional <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 package.json 中新增</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;husky&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;hooks&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;pre-commit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lint-staged&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;commit-msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commitlint -E HUSKY_GIT_PARAMS&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;commitlint&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;@commitlint/config-conventional&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;lint-staged&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;*.{ts,js}&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;node --max_old_space_size=8192 ./node_modules/.bin/prettier -w&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;node --max_old_space_size=8192 ./node_modules/.bin/eslint --fix --color&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;git add&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>babel</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> @rollup/plugin-babel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后创建 .babelrc 文件</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// modules:false 这个配置项</span>
<span class="token comment">// 配置成false,否则 Babel 会在 Rollup 有机会做处理之前，将我们的模块转成 CommonJS ，导致 Rollup 的一些处理失败。</span>
<span class="token punctuation">{</span>
    <span class="token property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">[</span>
        <span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;useBuiltIns&quot;</span><span class="token operator">:</span> <span class="token string">&quot;entry&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;corejs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3.6.4&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;modules&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string">&quot;@babel/preset-typescript&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;exclude&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node_modules/**&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41);function u(r,d){return a(),t("div",null,[i,e(" https://juejin.cn/post/7029525775321661470#heading-2 "),c])}const v=s(l,[["render",u],["__file","可执行命令.html.vue"]]);export{v as default};
