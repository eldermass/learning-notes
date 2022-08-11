import{_ as l,r as t,o as c,c as o,a as n,e,b as s,d as i}from"./app.4b7e0070.js";const p={},u=n("h1",{id:"docker-compose-\u4F7F\u7528",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker-compose-\u4F7F\u7528","aria-hidden":"true"},"#"),s(" docker-compose \u4F7F\u7528")],-1),d={href:"https://www.jianshu.com/p/658911a8cff3",target:"_blank",rel:"noopener noreferrer"},r=s("docker-compose.yml \u7684\u4F7F\u7528"),k=n("br",null,null,-1),v=n("a",{href:"https:#blog.csdn.net/qq_36148847/article/details/79427878"},"\u5404\u4E2A\u53C2\u6570\u7684\u89E3\u91CA",-1),m=n("br",null,null,-1),b={href:"https://www.cnblogs.com/moxiaoan/p/9299404.html",target:"_blank",rel:"noopener noreferrer"},h=s("\u542F\u52A8\u547D\u4EE4"),_=i(`<h2 id="docker-compose-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#docker-compose-\u547D\u4EE4" aria-hidden="true">#</a> docker-compose \u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u68C0\u67E5\u914D\u7F6E\u662F\u5426ok</span>
  <span class="token function">docker-compose</span> config  -q

<span class="token comment"># \u8FD0\u884C</span>
  <span class="token function">docker-compose</span> up           \u6267\u884C\u5F53\u524D\u76EE\u5F55\u7684.yml\u6587\u4EF6
            -d                \u540E\u53F0\u8FD0\u884C
            --force-recreate  \u53EF\u4EE5\u5F3A\u5236\u91CD\u5EFA\u5BB9

  <span class="token function">docker-compose</span> down         \u505C\u6B62\u6240\u6709\u5BB9\u5668\uFF0C\u5E76\u5220\u9664\u5BB9\u5668

<span class="token comment"># \u5217\u51FA\u6240\u8FD0\u884C\u7684\u5BB9\u5668</span>
  <span class="token function">docker-compose</span> <span class="token function">ps</span>

<span class="token comment"># \u67E5\u770B\u670D\u52A1\u65E5\u5FD7</span>
  <span class="token function">docker-compose</span> logs

<span class="token comment"># \u67D0\u670D\u52A1\u91CC3000\u7AEF\u53E3\uFF0C\u6620\u5C04\u7684\u516C\u5171\u7AEF\u53E3</span>
  <span class="token function">docker-compose</span> port service_name <span class="token number">3000</span>

<span class="token comment"># \u6784\u5EFA\u6216\u91CD\u6784\u67D0\u670D\u52A1</span>
  <span class="token function">docker-compose</span> build service_name

<span class="token comment"># \u542F\u52A8/\u505C\u6B62/\u5220\u9664/\u6307\u4EE4\u505C\u6B62 \u670D\u52A1</span>
  <span class="token function">docker-compose</span> start/stop/rm/kill service_name

<span class="token comment"># \u5728\u4E00\u4E2A\u670D\u52A1\u4E0A\u6267\u884C\u547D\u4EE4</span>
  <span class="token function">docker-compose</span> run service_name <span class="token builtin class-name">command</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dockerfile-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#dockerfile-\u6587\u4EF6" aria-hidden="true">#</a> Dockerfile \u6587\u4EF6</h2>`,3),y={href:"https://my.oschina.net/jack088/blog/3006794",target:"_blank",rel:"noopener noreferrer"},f=s("php-fpm\u7684\u62D3\u5C55"),g=s(" [Dockerfile\u8BED\u6CD5]](https://blog.csdn.net/wo18237095579/article/details/80540571)"),q=i(`<p>docker build \u547D\u4EE4\u4F1A\u5C06\u8BE5\u76EE\u5F55\u4E0B\u7684\u5185\u5BB9\u6253\u5305\u4EA4\u7ED9 Docker \u5F15\u64CE\u4EE5\u5E2E\u52A9\u6784\u5EFA\u955C\u50CF\u6784\u5EFA\u65F6\u4F20\u7ED9 Docker \u5F15\u64CE\u3002\u4E3A\u907F\u514D\u4F20\u8F93\u4E0A\u4E0B\u6587\u76EE\u5F55\u8FC7\u5927\uFF0C\u53EF\u4EE5\u7528 .gitignore \u4E00\u6837\u7684\u8BED\u6CD5\u5199\u4E00\u4E2A .dockerignore \uFF0C\u8BE5\u6587\u4EF6\u662F\u7528\u4E8E\u5254\u9664\u4E0D\u9700\u8981\u4F5C\u4E3A\u4E0A\u4E0B\u6587\u4F20\u9012\u7ED9 Docker \u5F15\u64CE\u7684\u3002</p><div class="language-Dockerfile ext-Dockerfile line-numbers-mode"><pre class="language-Dockerfile"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="docker-compose-yml-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#docker-compose-yml-\u6587\u4EF6" aria-hidden="true">#</a> docker-compose.yml \u6587\u4EF6</h2>`,3),x=s("\u957F\u8BED\u6CD5\u8868\u793A\u5C55\u5F00\u8868\u793A"),w=n("br",null,null,-1),D={href:"https://blog.csdn.net/qq_36148847/article/details/79427878",target:"_blank",rel:"noopener noreferrer"},E=s("\u8BED\u6CD5\u53C2\u6570\u8BE6\u89E3"),N=i(`<div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u683C\u5F0F\u7684\u7248\u672C</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token comment"># \u670D\u52A1\u540D</span>
  <span class="token key atrule">service_nginx</span><span class="token punctuation">:</span>
    <span class="token comment"># \u751F\u6210\u7684\u5BB9\u5668\u540D</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> nginx
    <span class="token comment"># \u91CD\u542F\u7B56\u7565\uFF0C\u9ED8\u8BA4no\uFF0C always\u8868\u793A\u62A5\u9519\u603B\u4F1A\u91CD\u542F</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token comment"># \u6307\u5B9A\u4F7F\u7528\u955C\u50CF\uFF0C\u5982\u679C\u4F60\u8FD8\u6307\u5B9A\u4E86build\uFF0C\u5B83\u5C06\u4F7F\u7528\u6307\u5B9A\u7684build\u9009\u9879\u6784\u5EFA\u5B83\uFF0C\u5E76\u4F7F\u7528image\u6307\u5B9A\u7684\u540D\u5B57\u548C\u6807\u8BB0\u5BF9\u5176\u8FDB\u884C\u6807\u8BB0\u3002</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx<span class="token punctuation">:</span>stable
    <span class="token comment"># \u4ECEDockerfile \u6784\u5EFA\u955C\u50CF\uFF0C\u53C2\u6570\u53EF\u4EE5\u5728Dockerfile\u4E2D\u901A\u8FC7$buildno\u8BBF\u95EE</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span>
      <span class="token key atrule">context</span><span class="token punctuation">:</span> ./dir
      <span class="token key atrule">dockerfile</span><span class="token punctuation">:</span> Dockerfile
      <span class="token key atrule">args</span><span class="token punctuation">:</span>
          <span class="token key atrule">buildno</span><span class="token punctuation">:</span> <span class="token number">1</span>
    <span class="token comment"># \u6620\u5C04\u7F51\u8DEF \uFF08HOST:CONTAINER\uFF09</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;80:80&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;127.0.0.1:8080:8080&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;127.0.0.1:3000-3010:3000-3010&quot;</span>
    <span class="token comment"># \u5377\u6302\u8F7D\u8DEF\u5F84\u8BBE\u7F6E\uFF0Cwin\u4E0B e\u76D8\u5BF9\u5E94 /e/, HOST:CONTAINER:ro\uFF0C\u6700\u540E\u4E00\u4E2A\u53C2\u6570 ro\uFF1A\u53EA\u8BFB\uFF0C rw\uFF1A\u8BFB\u5199</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /e/test/docker<span class="token punctuation">:</span>/etc/nginx/conf.d
    <span class="token comment"># \u94FE\u63A5\u5230\u6307\u5B9A\u670D\u52A1\u540D\u79F0\u548C\u94FE\u63A5\u522B\u540D  SERVICE\uFF1AALIAS</span>
    <span class="token comment"># /etc/hosts \u901A\u8FC7 \u670D\u52A1\u540D\u6216\u522B\u540D \u80FD\u8BBF\u95EE\u5230node\u670D\u52A1\u66B4\u9732\u7684\u7F51\u7EDC</span>
    <span class="token key atrule">links</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> node<span class="token punctuation">:</span>node
    <span class="token comment"># \u94FE\u63A5\u5230\u975Edocker-compose\u7BA1\u7406\u7684\u5BB9\u5668</span>
    <span class="token key atrule">external_links</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> mysql
      <span class="token punctuation">-</span> redis_1<span class="token punctuation">:</span>redis
    <span class="token comment"># \u6865\u63A5\u65F6\u5728\u5BB9\u5668\u91CC\u8BBF\u95EE\u5BBF\u4E3B\u7F51\u7EDC\uFF0C\u4F1A\u5728/etc/hosts \u91CC\u5199\u5165 \u57DF\u540D\u89E3\u6790\u5230\u5BBF\u4E3B 172.21.0.1  api.firmoo.test</span>
    <span class="token comment"># \u5BB9\u5668\u91CC\u901A\u8FC7 ip addr \u53EF\u67E5\u770B\u5230\u5BBF\u4E3B\u7F51\u7EDC</span>
    <span class="token key atrule">extra_hosts</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;api.firmoo.test:172.21.0.1&quot;</span>
    <span class="token comment"># \u8986\u76D6\u5BB9\u5668\u542F\u52A8\u540E\u9ED8\u8BA4\u6267\u884C\u7684\u547D\u4EE4</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> sh <span class="token punctuation">-</span>c &#39;ping www.baidu.com&#39;
    <span class="token comment"># \u73AF\u5883\u53D8\u91CF</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> SECRET=development
    <span class="token comment"># \u8BFB\u53D6env\u6587\u4EF6\u4F5C\u4E3A\u73AF\u5883\u53D8\u91CF</span>
    <span class="token key atrule">env_file</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./web.env
    <span class="token comment"># \u66B4\u9732\u7AEF\u53E3\uFF0C\u4F46\u4E0D\u6620\u5C04\u5230\u5BBF\u4E3B\u673A\uFF0C\u53EA\u88AB\u8FDE\u63A5\u7684\u670D\u52A1\u8BBF\u95EE\u3002</span>
    <span class="token key atrule">expose</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;80&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;443&quot;</span>
    <span class="token comment"># \u5171\u4EAB\u5BB9\u5668\u4E0E\u4E3B\u673A\u4E4B\u95F4\u7684PID\u5730\u5740\u7A7A\u95F4\uFF0C\u5BB9\u5668\u5C06\u80FD\u591F\u8BBF\u95EE\u548C\u64CD\u4F5C\u4E3B\u673A\u7684\u547D\u540D\u7A7A\u95F4\u4E2D\u7684\u5176\u4ED6\u5BB9\u5668</span>
    <span class="token key atrule">pid</span><span class="token punctuation">:</span> <span class="token string">&quot;host&quot;</span>
    <span class="token comment"># dns\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u503C</span>
    <span class="token key atrule">dns</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8.8.8.8
      <span class="token punctuation">-</span> 9.9.9.9
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">lnmp-network</span><span class="token punctuation">:</span>
        <span class="token key atrule">aliases</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> service_nginx
    <span class="token comment"># \u662F\u5426\u4EE5\u6700\u9AD8\u6743\u9650\u5F00\u542F\u5BB9\u5668</span>
    <span class="token key atrule">privileged</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token comment"># \u672C\u670D\u52A1\u4F9D\u8D56\u7684\u670D\u52A1\uFF0C\u987A\u5E8F\u5728\u5176\u540E\u542F\u52A8</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> node
    <span class="token key atrule">ulimits</span><span class="token punctuation">:</span>
      <span class="token key atrule">nproc</span><span class="token punctuation">:</span> <span class="token number">65535</span>
      <span class="token key atrule">nofile</span><span class="token punctuation">:</span>
        <span class="token key atrule">soft</span><span class="token punctuation">:</span> <span class="token number">20000</span>
        <span class="token key atrule">hard</span><span class="token punctuation">:</span> <span class="token number">40000</span>
  <span class="token key atrule">node</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> node
    <span class="token key atrule">build</span><span class="token punctuation">:</span> .
    <span class="token key atrule">expose</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;3000&quot;</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;3000:3000&quot;</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> npm start
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">lnmp-network</span><span class="token punctuation">:</span>
        <span class="token key atrule">aliases</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> node
    <span class="token key atrule">privileged</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">ulimits</span><span class="token punctuation">:</span>
      <span class="token key atrule">nproc</span><span class="token punctuation">:</span> <span class="token number">65535</span>
      <span class="token key atrule">nofile</span><span class="token punctuation">:</span>
        <span class="token key atrule">soft</span><span class="token punctuation">:</span> <span class="token number">20000</span>
        <span class="token key atrule">hard</span><span class="token punctuation">:</span> <span class="token number">40000</span>
<span class="token comment"># \u7F51\u7EDC\u522B\u540D</span>
<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">lnmp-network</span><span class="token punctuation">:</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function I(C,S){const a=t("ExternalLinkIcon");return c(),o("div",null,[u,n("p",null,[n("a",d,[r,e(a)]),k,v,m,n("a",b,[h,e(a)])]),_,n("p",null,[n("a",y,[f,e(a)]),g]),q,n("p",null,[x,w,n("a",D,[E,e(a)])]),N])}var V=l(p,[["render",I],["__file","docker-compose.html.vue"]]);export{V as default};
