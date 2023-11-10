import{_ as i,Y as r,Z as d,a1 as e,a2 as a,a3 as o,a0 as n,E as l}from"./framework-6d304b95.js";const c="/learning-notes/assets/mono_1-8b34f3df.webp",t={},p=n('<h1 id="前端工程化之-monorepo" tabindex="-1"><a class="header-anchor" href="#前端工程化之-monorepo" aria-hidden="true">#</a> 前端工程化之 monorepo</h1><h2 id="一、概念" tabindex="-1"><a class="header-anchor" href="#一、概念" aria-hidden="true">#</a> 一、概念</h2><p>就是把多个项目放在一个仓库里面，相对立的是传统的 MultiRepo 模式，即每个项目对应一个单独的仓库来分散管理。</p><p><img src="'+c+`" alt=""></p><p>monorepo 管理下的目录，每个子项目都是独立的，既可以配合上git submodule 分开管理，又能在在使用时相互引用。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>├── packages
<span class="token operator">|</span>   ├── pkg1
<span class="token operator">|</span>   <span class="token operator">|</span>   ├── package.json
<span class="token operator">|</span>   ├── pkg2
<span class="token operator">|</span>   <span class="token operator">|</span>   ├── package.json
├── package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、意义" tabindex="-1"><a class="header-anchor" href="#二、意义" aria-hidden="true">#</a> 二、意义</h2><h3 id="_1-解决了-multirepo-中代码复用的问题" tabindex="-1"><a class="header-anchor" href="#_1-解决了-multirepo-中代码复用的问题" aria-hidden="true">#</a> 1. 解决了 MultiRepo 中代码复用的问题</h3><p>解决项目间 <code>copy</code> 代码比较好的方式是将公共的逻辑代码抽取出来，作为一个 npm 包进行发布，一旦需要改动，就只需要改动一份代码。</p><h3 id="_2-解决了包的版本管理问题" tabindex="-1"><a class="header-anchor" href="#_2-解决了包的版本管理问题" aria-hidden="true">#</a> 2. 解决了包的版本管理问题</h3><p>项目之间的依赖</p><h3 id="_3-一致的工作流" tabindex="-1"><a class="header-anchor" href="#_3-一致的工作流" aria-hidden="true">#</a> 3. 一致的工作流</h3><p>由于在 MultiRepo 当中，各个项目的工作流是割裂的，因此每个项目需要单独配置开发环境、配置 CI 流程、配置部署发布流程等等，甚至每个项目都有自己单独的一套脚手架工具。统一了项目的基建内容。</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>`,14),h={href:"https://juejin.cn/post/7129267782515949575",target:"_blank",rel:"noopener noreferrer"},u=n(`<h3 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npx create-turbo@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看目录 tree -L -I</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>├── README.md
├── apps
│   ├── docs
│   └── web
├── package.json
├── packages
│   ├── eslint-config-custom
│   ├── tsconfig
│   └── ui
├── turbo.json
└── yarn.lock
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function m(v,b){const s=l("ExternalLinkIcon");return r(),d("div",null,[p,e("p",null,[a("monorepo 的实现有很多，nx/rush/lerna/bit等。TurboRepo 则是比较新的一个实现，它并行处理和增量构建的方式让他性能比其他几个更优秀。"),e("a",h,[a("入门指南"),o(s)])]),u])}const g=i(t,[["render",m],["__file","monorepo.html.vue"]]);export{g as default};
