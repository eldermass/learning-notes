import{_ as i,Y as p,Z as r,a3 as c,a4 as a,a1 as n,a2 as s,a0 as u,E as d}from"./framework-6d304b95.js";const k={},m=n("h1",{id:"pm2部署应用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#pm2部署应用","aria-hidden":"true"},"#"),s(" PM2部署应用")],-1),v=n("h2",{id:"基础使用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#基础使用","aria-hidden":"true"},"#"),s(" 基础使用")],-1),b=n("ol",null,[n("li",null,"使用 docker 镜像")],-1),g=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" http "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"http"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 加载 HTTP 模块"),s(`

`),n("span",{class:"token keyword"},"const"),s(" server "),n("span",{class:"token operator"},"="),s(" http"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"createServer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("req"),n("span",{class:"token punctuation"},","),s(" res")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 处理请求的回调函数"),s(`
    res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"writeHead"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token string-property property"},'"Content-Type"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"text/html"'),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 设置响应头"),s(`
    res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"write"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"<h1>Hello, World!</h1>"'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 设置响应体"),s(`
    res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"end"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 结束响应"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

server`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"listen"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"8080"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 监听端口"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Server running at http://localhost:8080/"'),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token string-property property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"test-pm2"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token string-property property"},'"script"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"server.js"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token string-property property"},'"instances"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token string-property property"},'"env"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token string-property property"},'"NODE_ENV"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"development"'),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token string-property property"},'"env_production"'),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token string-property property"},'"NODE_ENV"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"production"'),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-docker line-numbers-mode","data-ext":"docker"},[n("pre",{class:"language-docker"},[n("code",null,[n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"FROM"),s(" keymetrics/pm2:latest-alpine")]),s(`

`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"WORKDIR"),s(" /app")]),s(`

`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"COPY"),s(" . /app")]),s(`

`),n("span",{class:"token comment"},"# Install app dependencies"),s(`
`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"ENV"),s(" NPM_CONFIG_LOGLEVEL warn")]),s(`
`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"RUN"),s(" npm install --production")]),s(`

`),n("span",{class:"token comment"},"# Show current folder structure in logs"),s(`
`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"RUN"),s(" ls -al -R")]),s(`

`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"EXPOSE"),s(" 8080")]),s(`

`),n("span",{class:"token comment"},"# 如果报错 [pm2-runtime not found 应该是换行符的问题"),s(`
`),n("span",{class:"token instruction"},[n("span",{class:"token keyword"},"CMD"),s(" [ "),n("span",{class:"token string"},'"pm2-runtime"'),s(", "),n("span",{class:"token string"},'"start"'),s(", "),n("span",{class:"token string"},'"pm2.json"'),s(" ]")]),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("div",{class:"language-yaml line-numbers-mode","data-ext":"yml"},[n("pre",{class:"language-yaml"},[n("code",null,[n("span",{class:"token key atrule"},"version"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"3.5"'),s(`

`),n("span",{class:"token key atrule"},"services"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token comment"},"### Node ################################################"),s(`
    `),n("span",{class:"token key atrule"},"pm2"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token key atrule"},"build"),n("span",{class:"token punctuation"},":"),s(`
            `),n("span",{class:"token key atrule"},"context"),n("span",{class:"token punctuation"},":"),s(` .
        `),n("span",{class:"token key atrule"},"ports"),n("span",{class:"token punctuation"},":"),s(`
            `),n("span",{class:"token punctuation"},"-"),s(),n("span",{class:"token string"},'"8080:8080"'),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=u(`<ol start="2"><li>使用 pm2 命令</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Monitoring CPU/Usage of each process</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token operator">&lt;</span>container-id<span class="token operator">&gt;</span> pm2 monit
<span class="token comment"># Listing managed processes</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token operator">&lt;</span>container-id<span class="token operator">&gt;</span> pm2 list
<span class="token comment"># Get more information about a process</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token operator">&lt;</span>container-id<span class="token operator">&gt;</span> pm2 show
<span class="token comment"># 0sec downtime reload all applications</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token operator">&lt;</span>container-id<span class="token operator">&gt;</span> pm2 reload all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>其实不用这么麻烦 在 node 镜像启动的容器里，安装就行</li></ol>`,3),x=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(" pm2 "),n("span",{class:"token parameter variable"},"-g"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token string-property property"},'"name"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"project-name"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token string-property property"},'"script"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"server.js"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token string-property property"},'"instances"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"2"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token string-property property"},'"env"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token string-property property"},'"NODE_ENV"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"development"'),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token string-property property"},'"env_production"'),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token string-property property"},'"NODE_ENV"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"production"'),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=n("div",{class:"language-DOCKERFILE line-numbers-mode","data-ext":"DOCKERFILE"},[n("pre",{class:"language-DOCKERFILE"},[n("code",null,`CMD [ "pm2-runtime", "start", "pm2.json" ]
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1);function j(w,C){const o=d("CodeTabs");return p(),r("div",null,[m,v,b,c(o,{id:"13",data:[{title:"server.js"},{title:"pm2.json"},{title:"Dockerfile"},{title:"docker-compose.yml"}],active:3,"tab-id":"shell"},{tab0:a(({title:e,value:t,isActive:l})=>[g]),tab1:a(({title:e,value:t,isActive:l})=>[h]),tab2:a(({title:e,value:t,isActive:l})=>[y]),tab3:a(({title:e,value:t,isActive:l})=>[_]),_:1},8,["data"]),f,c(o,{id:"42",data:[{title:"安装"},{title:"pm2.json"},{title:"启动"}],active:0,"tab-id":"shell"},{tab0:a(({title:e,value:t,isActive:l})=>[x]),tab1:a(({title:e,value:t,isActive:l})=>[E]),tab2:a(({title:e,value:t,isActive:l})=>[N]),_:1},8,["data"])])}const D=i(k,[["render",j],["__file","PM2.html.vue"]]);export{D as default};
